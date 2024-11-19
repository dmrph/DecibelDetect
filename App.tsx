import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { Audio } from 'expo-av';

export default function RecordScreen() {
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [message, setMessage] = useState('');
  const [recordingUri, setRecordingUri] = useState<string | null>(null);

  async function startRecording() {
    try {
      console.log('Requesting permissions...');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
  
      console.log('Starting recording...');
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording); // Properly setting the recording object
      setMessage('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }
  
  
  

  async function stopRecording() {
    if (!recording) return;

    console.log('Stopping recording...');
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    setRecordingUri(uri);
    setRecording(null);
    setMessage(`Recording saved at: ${uri}`);
  }

  async function uploadRecording() {
    if (!recordingUri) {
      setMessage('No recording to upload');
      return;
    }

    try {
      console.log('Uploading recording...');
      const fileData = await FileSystem.readAsStringAsync(recordingUri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const response = await fetch('http://<YOUR_BACKEND_IP>:8000/upload-audio/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          file_name: 'recording.m4a',
          file_data: fileData,
        }),
      });

      const result = await response.json();
      console.log('Upload result:', result);
      setMessage(`Uploaded successfully. Decibel level: ${result.decibel_level} dB`);
    } catch (err) {
      console.error('Upload failed', err);
      setMessage('Failed to upload recording');
    }
  }

  return (
    <View>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      />
      {recordingUri && (
        <Button title="Upload Recording" onPress={uploadRecording} />
      )}
      <Text>{message}</Text>
    </View>
  );
}
