import React, { useState } from 'react';
import './NoiseAlert.css';

export default function NoiseAlert() {
  const [recording, setRecording] = useState(null);
  const [message, setMessage] = useState('');
  const [chunks, setChunks] = useState([]);
  const [audioBlob, setAudioBlob] = useState(null);

  const BACKEND_URL = 'http://127.0.0.1:8000';

  async function startRecording() {
    try {
      console.log('Requesting permissions...');
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks = [];
      
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunks.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunks, { type: 'audio/webm' });
        setAudioBlob(blob);
        setChunks(audioChunks);
      };

      mediaRecorder.start();
      setRecording(mediaRecorder);
      setMessage('Recording started...');
    } catch (err) {
      console.error('Failed to start recording', err);
      setMessage('Failed to start recording: ' + err.message);
    }
  }

  async function stopRecording() {
    if (!recording) return;

    try {
      recording.stop();
      setRecording(null);
      setMessage('Recording stopped. Ready to upload.');
    } catch (err) {
      console.error('Failed to stop recording', err);
      setMessage('Failed to stop recording: ' + err.message);
    }
  }

  async function uploadRecording() {
    if (!audioBlob) {
      setMessage('No recording to upload.');
      return;
    }

    try {
      const reader = new FileReader();
      
      reader.onload = async () => {
        const base64Data = reader.result.split(',')[1];
        
        const response = await fetch(`${BACKEND_URL}/upload-audio/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            file_name: 'recording.webm',
            file_data: base64Data,
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Upload failed: ${errorText}`);
        }

        const result = await response.json();
        setMessage(`Upload successful! Decibel level: ${result.decibel_level.toFixed(2)} dB`);
      };

      reader.onerror = () => {
        throw new Error('Failed to read audio file');
      };

      reader.readAsDataURL(audioBlob);
    } catch (err) {
      console.error('Upload failed:', err);
      setMessage('Failed to upload: ' + err.message);
    }
  }

  return (
    <div className="recording-container">
      <div className="button-container">
        <button 
          onClick={recording ? stopRecording : startRecording}
          className="record-button"
        >
          {recording ? 'Stop Recording' : 'Start Recording'}
        </button>
        
        {audioBlob && (
          <button 
            onClick={uploadRecording}
            className="upload-button"
          >
            Upload Recording
          </button>
        )}
      </div>
      
      <p className="message">{message}</p>
      
      {audioBlob && (
        <audio 
          className="audio-preview"
          controls 
          src={URL.createObjectURL(audioBlob)}
        />
      )}
    </div>
  );
}