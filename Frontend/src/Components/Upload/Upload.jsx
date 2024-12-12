import React, { useState } from 'react';

export default function UploadAudio() {
  const [recording, setRecording] = useState(null);
  const [message, setMessage] = useState('');
  const [recordingUri, setRecordingUri] = useState(null);

  const BACKEND_URL = 'http://127.0.0.1:8000'; // Replace with your backend URL

  async function startRecording() {
    try {
      console.log('Requesting permissions...');
      const { status } = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (!status) {
        setMessage('Permission to access microphone is required!');
        return;
      }

      const mediaRecorder = new MediaRecorder(await navigator.mediaDevices.getUserMedia({ audio: true }));
      mediaRecorder.start();
      setRecording(mediaRecorder);
      setMessage('Recording started...');

      mediaRecorder.ondataavailable = (e) => {
        const audioURL = URL.createObjectURL(e.data);
        setRecordingUri(audioURL);
      };
    } catch (err) {
      console.error('Failed to start recording', err);
      setMessage('Failed to start recording. Please try again.');
    }
  }

  async function stopRecording() {
    if (!recording) return;

    try {
      console.log('Stopping recording...');
      recording.stop();
      setRecording(null);
      setMessage(`Recording saved at: ${recordingUri}`);
    } catch (err) {
      console.error('Failed to stop recording', err);
      setMessage('Failed to stop recording. Please try again.');
    }
  }

  async function uploadRecording() {
    if (!recordingUri) {
      setMessage('No recording to upload.');
      return;
    }

    try {
      console.log('Fetching blob data...');
      const response = await fetch(recordingUri);
      const blob = await response.blob();

      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Data = (reader.result || '').split(',')[1]; // Strip Base64 metadata
        console.log('Base64 data prepared:', base64Data.slice(0, 30), '...');

        console.log('Uploading recording...');
        const uploadResponse = await fetch(`${BACKEND_URL}/upload-audio/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            file_name: 'recording.webm',
            file_data: base64Data,
          }),
        });

        if (!uploadResponse.ok) {
          const errorText = await uploadResponse.text();
          console.error('Upload failed:', errorText);
          throw new Error(`HTTP error! Status: ${uploadResponse.status}`);
        }

        const result = await uploadResponse.json();
        console.log('Upload result:', result);
        setMessage(
          `Uploaded successfully. Decibel level: ${result.decibel_level.toFixed(
            2
          )} dB`
        );
      };

      reader.readAsDataURL(blob);
    } catch (err) {
      console.error('Upload failed:', err);
      setMessage('Failed to upload recording. Please try again.');
    }
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <button onClick={recording ? stopRecording : startRecording}>
        {recording ? 'Stop Recording' : 'Start Recording'}
      </button>
      {recordingUri && (
        <button onClick={uploadRecording} style={{ marginLeft: '10px' }}>
          Upload Recording
        </button>
      )}
      <p style={{ marginTop: '20px' }}>{message}</p>
    </div>
  );
}