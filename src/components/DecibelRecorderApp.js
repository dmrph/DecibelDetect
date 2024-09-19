import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';

export default function DecibelRecorderApp() {
  const [isRecording, setIsRecording] = useState(false);
  const [decibelLevel, setDecibelLevel] = useState(0);
  const [recording, setRecording] = useState();

  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      setIsRecording(true);

      console.log('Recording started');
      
      // Start measuring decibel levels
      measureDecibelLevels();
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setIsRecording(false);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);
    // process the recording to calculate overall decibel levels
    // and potentially send data to server
    await uploadToServer(uri);
  }

  async function measureDecibelLevels() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
  
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
  
    while (isRecording) {
      analyser.getByteFrequencyData(dataArray);
      const decibelValue = Math.max(...dataArray); // Peak value
      setDecibelLevel(decibelValue); // This simulates decibel level
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  

  async function uploadToServer(fileUri) {
    try {
      const fileInfo = await FileSystem.getInfoAsync(fileUri);
      const formData = new FormData();
      formData.append('audioFile', {
        uri: fileUri,
        type: 'audio/m4a',
        name: 'recording.m4a',
      });
      
      // server URL
      const response = await fetch('https://', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      const result = await response.json();
      console.log('Upload successful', result);
    } catch (error) {
      console.error('Upload failed', error);
    }
  }

  return (
    <View style={styles.container}>
      <Button
        title={isRecording ? 'Stop Recording' : 'Start Recording'}
        onPress={isRecording ? stopRecording : startRecording}
      />
      <Text style={styles.decibelText}>
        Current Decibel Level: {decibelLevel.toFixed(2)} dB
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  decibelText: {
    marginTop: 20,
    fontSize: 18,
  },
});