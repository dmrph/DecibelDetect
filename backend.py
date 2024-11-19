from fastapi import FastAPI, File, UploadFile
from pydub import AudioSegment
import base64
import io

app = FastAPI()

@app.post("/upload-audio/")
async def upload_audio(file_name: str, file_data: str):
    try:
        # Decode the Base64 audio file
        audio_bytes = base64.b64decode(file_data)
        audio = AudioSegment.from_file(io.BytesIO(audio_bytes), format="m4a")
        
        # Calculate decibel level
        decibel_level = audio.dBFS  # Average decibel level of the audio
        return {"file_name": file_name, "decibel_level": decibel_level}
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
