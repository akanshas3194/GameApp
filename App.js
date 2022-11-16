import 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import DrawerStack from './src/Navigation/drawerStack';
import store from './src/Store/store';
import { Provider } from 'react-redux';
import { IconComponentProvider } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  return (
    
    <Provider store={store}>
       <IconComponentProvider IconComponent={MaterialCommunityIcons}>
    <View style={styles.container}>
   
    <DrawerStack/>
    
    </View>
    </IconComponentProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
