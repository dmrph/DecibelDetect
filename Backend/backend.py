from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import base64
import io
from pydub import AudioSegment
import logging
from querydb import insert_record, get_all_records

# Initialize FastAPI app
app = FastAPI()

# Enable CORS for all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Logging configuration
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

# Data model for incoming requests
class AudioUpload(BaseModel):
    file_name: str
    file_data: str

# Define noise floor offset (adjust based on your microphone calibration)
NOISE_FLOOR_OFFSET = 94  # Example: Adjust this based on your hardware

@app.post("/upload-audio/")
async def upload_audio(audio: AudioUpload):
    logger.debug(f"Received file: {audio.file_name}")
    try:
        # Decode Base64 data
        file_data = base64.b64decode(audio.file_data, validate=True)
        logger.debug(f"File data length: {len(file_data)}")
        
        # Convert decoded data into an in-memory file
        audio_file = io.BytesIO(file_data)
        audio_file.name = audio.file_name  # Set a name for debugging/logging

        # Load the audio file using pydub
        logger.debug("Attempting to process audio...")
        try:
            sound = AudioSegment.from_file(audio_file)
        except Exception as e:
            logger.error(f"Audio processing error: {str(e)}")
            raise HTTPException(
                status_code=400,
                detail=f"Failed to process audio: {str(e)}",
            )
        
        # Extract decibel level and duration
        duration = len(sound) / 1000  # in seconds
        raw_loudness = sound.dBFS
        calibrated_loudness = raw_loudness + NOISE_FLOOR_OFFSET

        logger.debug(f"Audio duration: {duration} seconds")
        logger.debug(f"Calibrated SPL value: {calibrated_loudness}")

        # Save to SQLite database
        try:
            insert_record(audio.file_name, duration, calibrated_loudness)
            logger.debug("Data saved to database successfully.")
        except Exception as e:
            logger.error(f"Database error: {str(e)}")
            raise HTTPException(status_code=500, detail="Failed to save data to the database.")

        return {
            "message": "Audio processed and saved successfully",
            "duration": duration,
            "decibel_level": round(calibrated_loudness, 2)
        }

    except base64.binascii.Error as e:
        logger.error(f"Base64 decoding error: {str(e)}")
        raise HTTPException(status_code=400, detail=f"Failed to decode file data: {str(e)}")
    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")

@app.get("/get-recordings/")
async def get_recordings():
    """
    Fetch all stored decibel records.
    """
    try:
        records = get_all_records()
        logger.debug(f"Retrieved {len(records)} records from the database.")
        return {"recordings": records}
    except Exception as e:
        logger.error(f"Error fetching recordings: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch recordings.")
