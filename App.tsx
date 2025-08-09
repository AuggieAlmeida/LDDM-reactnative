import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <Text style={styles.title2}>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    fontFamily: 'Velvetica',
    color: '#000000ff',
  },
  title2: {
    fontSize: 16,
    fontWeight: 400,
    fontFamily: 'Velvetica',
    color: '#9c0d0dff',
    marginTop: 10
  },

});
