import { Button, StyleSheet, Text, View } from 'react-native';
import React, { Suspense, useState } from 'react';

const MyChunkComponent = React.lazy(() => import("./src/MyChunkComponent"));
// const MyRemoteComponent = React.lazy(() => import('./src/MyRemoteComponent'))

const App: React.FC = () => {
  const [showChunk, setShowChunk] = useState(false);

  const handlePressButton = () => {
    setShowChunk(true)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chunk Component/Code Splitting POC</Text>
      <Button
        title='Show my chunk component'
        onPress={handlePressButton}
      />
      {
        showChunk && (
          <Suspense fallback={<Text style={styles.text}>Loading...</Text>}>
            <MyChunkComponent />
          </Suspense>
        )
      }
      {/* <Suspense fallback={<Text style={styles.text}>Loading...</Text>}>
        <MyRemoteComponent />
      </Suspense> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20
  }
})

export default App;