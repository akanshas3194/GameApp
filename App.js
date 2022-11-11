import { StyleSheet, View } from 'react-native';
import AppStack from './src/Navigation/appStack';

export default function App() {
  return (
    <View style={styles.container}>
      <AppStack/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
