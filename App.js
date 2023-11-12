import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider,Text } from 'react-native-paper';


import { HomeScreen } from './src/screens/Home';



export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
      <Text variant="titleLarge"> HELLO </Text>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>

    </PaperProvider>
    
  );
}

// Optional Component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
