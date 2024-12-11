import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default function RecordScreen() {
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [message, setMessage] = useState('');
  const [recordingUri, setRecordingUri] = useState<string | null>(null);

  const BACKEND_URL = 'http://127.0.0.1:8000'; // Replace with your backend IP for device testing

  async function startRecording() {
    try {
      console.log('Requesting permissions...');
      const { status } = await Audio.requestPermissionsAsync();
      if (status !== 'granted') {
        setMessage('Permission to access microphone is required!');
        return;
      }

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording...');
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      setMessage('Recording started...');
    } catch (err) {
      console.error('Failed to start recording', err);
      setMessage('Failed to start recording. Please try again.');
    }
  }

  async function stopRecording() {
    if (!recording) return;

    try {
      console.log('Stopping recording...');
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      console.log('Recording URI:', uri);
      setRecordingUri(uri);
      setRecording(null);
      setMessage(`Recording saved at: ${uri}`);
    } catch (err) {
      console.error('Failed to stop recording', err);
      setMessage('Failed to stop recording. Please try again.');
    }
  }

  async function uploadRecording() {
    if (!recordingUri) {
      setMessage("No recording to upload.");
      return;
    }
  
    try {
      console.log("Fetching blob data...");
      const response = await fetch(recordingUri);
      const blob = await response.blob();
  
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Data = (reader.result as string).split(",")[1]; // Strip Base64 metadata
        console.log("Base64 data prepared:", base64Data.slice(0, 30), "..."); // Log partial data for debugging
  
        console.log("Uploading recording...");
        const uploadResponse = await fetch(`${BACKEND_URL}/upload-audio/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            file_name: "recording.m4a",
            file_data: base64Data,
          }),
        });
  
        if (!uploadResponse.ok) {
          const errorText = await uploadResponse.text();
          console.error("Upload failed:", errorText);
          throw new Error(`HTTP error! Status: ${uploadResponse.status}`);
        }
  
        const result = await uploadResponse.json();
        console.log("Upload result:", result);
        setMessage(
          `Uploaded successfully. Decibel level: ${result.decibel_level.toFixed(
            2
          )} dB`
        );
      };
  
      reader.readAsDataURL(blob);
    } catch (err) {
      console.error("Upload failed:", err);
      setMessage("Failed to upload recording. Please try again.");
    }
  }
  
  

  return (
    <View style={styles.container}>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      />
      {recordingUri && (
        <Button title="Upload Recording" onPress={uploadRecording} />
      )}
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  message: {
    marginTop: 20,
    textAlign: 'center',
  },
});
