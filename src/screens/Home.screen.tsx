import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MooodPicker } from '../components/MoodPicker';

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <MooodPicker />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
