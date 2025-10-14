import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

const MyChunkComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is my chunk component</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  text: {
    color: 'white',
    fontSize: 15
  }
})

export default MyChunkComponent;