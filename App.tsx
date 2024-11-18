import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { Audio } from 'expo-av';

export default function RecordScreen() {
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [message, setMessage] = useState('');
  const [recordingUri, setRecordingUri] = useState<string | null>(null);

  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log('Starting recording..');

      const recordingOptions = {
        android: {
          extension: '.m4a',
          outputFormat: 2, // Corresponds to MPEG_4 (check the Android constants documentation if needed)
          audioEncoder: 3, // Corresponds to AAC (Advanced Audio Codec)
          sampleRate: 44100,
          numberOfChannels: 2,
          bitRate: 128000,
        },
        ios: {
          extension: '.m4a',
          audioQuality: 1, // Highest quality
          sampleRate: 44100,
          numberOfChannels: 2,
          bitRate: 128000,
          linearPCMBitDepth: 16,
          linearPCMIsBigEndian: false,
          linearPCMIsFloat: false,
        },
        web: {}
      };
      

      const { recording } = await Audio.Recording.createAsync(recordingOptions);
      setRecording(recording);
      setMessage('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    if (!recording) return;

    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    setRecordingUri(uri);
    setRecording(null);
    setMessage('Recording stopped');
    console.log('Recording stopped and stored at', uri);
  }

  async function playSound() {
    if (!recordingUri) return;

    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync({ uri: recordingUri });
    setSound(sound);
    setMessage('Playing recording');
    console.log('Playing Sound');

    await sound.playAsync();
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.didJustFinish) {
        // Playback finished
        setMessage('Playback finished');
        setSound(null);
      } else if (!status.isLoaded) {
        console.error('Playback status error:', status);
      }
    });
    
  }

  return (
    <View>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      />
      {recordingUri && !recording && (
        <Button title="Play Recording" onPress={playSound} />
      )}
      <Text>{message}</Text>
    </View>
  );
}
