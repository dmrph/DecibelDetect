from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import base64
import io
from pydub import AudioSegment
import logging

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
        
        # Extract decibel level or any other processing
        duration = len(sound) / 1000  # in seconds
        logger.debug(f"Audio duration: {duration} seconds")
        loudness = sound.dBFS
        return {"message": "Audio processed successfully", "duration": duration, "decibel_level": loudness}

    except base64.binascii.Error as e:
        logger.error(f"Base64 decoding error: {str(e)}")
        raise HTTPException(status_code=400, detail=f"Failed to decode file data: {str(e)}")
    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")
