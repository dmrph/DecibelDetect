import React from 'react';
import { SafeAreaView } from 'react-native';
import DecibelRecorderApp from './src/components/DecibelRecorderApp';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DecibelRecorderApp />
    </SafeAreaView>
  );
}