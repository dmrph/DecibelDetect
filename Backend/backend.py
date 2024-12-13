from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import base64
import io
from pydub import AudioSegment
from pydub.utils import which
import logging
from querydb import insert_record, get_all_records, init_db  # Import init_db directly

# Explicitly set ffmpeg and ffprobe paths
AudioSegment.converter = which("C:\\ffmpeg\\bin\\ffmpeg.exe")
AudioSegment.ffprobe = which("C:\\ffmpeg\\bin\\ffprobe.exe")

# Logging setup
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)
logger.info(f"FFmpeg path: {AudioSegment.converter}")
logger.info(f"FFprobe path: {AudioSegment.ffprobe}")

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

# Initialize the database when the backend starts
init_db()  # Automatically initialize the database schema
logger.info("Database initialized successfully.")

# Data model for incoming requests
class AudioUpload(BaseModel):
    file_name: str
    file_data: str

# Define noise floor offset (adjust based on your microphone calibration)
NOISE_FLOOR_OFFSET = 90  # Example: Adjust this based on your hardware

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
        sound = AudioSegment.from_file(audio_file)
        
        # Extract decibel level and duration
        duration = len(sound) / 1000  # in seconds
        raw_loudness = sound.dBFS
        calibrated_loudness = raw_loudness + NOISE_FLOOR_OFFSET

        logger.debug(f"Audio duration: {duration} seconds")
        logger.debug(f"Calibrated SPL value: {calibrated_loudness}")

        # Save to SQLite database
        insert_record(audio.file_name, duration, calibrated_loudness)
        logger.debug("Data saved to database successfully.")

        return {
            "message": "Audio processed and saved successfully",
            "duration": duration,
            "decibel_level": round(calibrated_loudness, 2)
        }

    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")

@app.get("/get-recordings/")
async def get_recordings():
    try:
        records = get_all_records()
        logger.debug(f"Retrieved {len(records)} records from the database.")
        return {"recordings": records}
    except Exception as e:
        logger.error(f"Error fetching recordings: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch recordings.")

@app.delete("/clear-recordings/")
async def clear_recordings():
    try:
        from querydb import clear_all_records
        clear_all_records()
        logger.debug("All records cleared from the database.")
        return {"message": "All records successfully deleted."}
    except Exception as e:
        logger.error(f"Error clearing records: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to clear records.")
