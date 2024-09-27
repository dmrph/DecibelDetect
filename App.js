import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';

export default function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [decibelLevel, setDecibelLevel] = useState(0);
  const [recording, setRecording] = useState();

  useEffect(() => {
    return () => {
      if (recording) {
        recording.stopAndUnloadAsync();
      }
    };
  }, []);

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
      
      measureDecibelLevels(recording);
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
    // You can process the recording here if needed
    // await uploadToServer(uri);
  }

  async function measureDecibelLevels(recordingObject) {
    while (isRecording) {
      const status = await recordingObject.getStatusAsync();
      if (status.isRecording) {
        const { metering = -160 } = status;
        // Convert metering to a 0-100 scale for simplicity
        const decibelValue = Math.max(0, (metering + 160) * (100 / 160));
        setDecibelLevel(decibelValue);
      }
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  // Uncomment and implement this function if you want to upload to a server
  // async function uploadToServer(fileUri) {
  //   // Implementation for uploading to server
  // }

  return (
    <View style={styles.container}>
      <Button
        title={isRecording ? 'Stop Recording' : 'Start Recording'}
        onPress={isRecording ? stopRecording : startRecording}
      />
      <Text style={styles.decibelText}>
        Current Decibel Level: {decibelLevel.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  decibelText: {
    marginTop: 20,
    fontSize: 18,
  },
});