import { Button, StyleSheet, Text, View } from 'react-native';
import React, { Suspense, useState } from 'react';

const MyChunkComponent = React.lazy(() =>
  import("./src/MyChunkComponent")
);
const MyRemoteComponent = React.lazy(() =>
  import("./src/MyRemoteComponent")
);
// const MyChunkComponent = React.lazy(() =>
//   import(/* webpackChunkName: "src_MyChunkComponent_tsx" */ "./src/MyChunkComponent")
// );
// const MyRemoteComponent = React.lazy(() =>
//   import(/* webpackChunkName: "src_MyRemoteComponent_tsx" */ "./src/MyRemoteComponent")
// );
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
      <Suspense fallback={<Text style={styles.text}>Loading...</Text>}>
        <MyRemoteComponent />
      </Suspense>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'gray',
    paddingTop: 150
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20
  }
})

export default App;