import 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import DrawerStack from './src/Navigation/drawerStack';
import store from './src/Store/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
    
    <DrawerStack/>
   
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
