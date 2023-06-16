import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather, Ionicons  } from "@expo/vector-icons";
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabRoutes from './tab.routes';
import Exit from '../components/Exit/Exit';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  
  return (
    <Drawer.Navigator screenOptions={{ title: '' }}>
      <Drawer.Screen 
        name="Home" 
        component={TabRoutes}
        options={{
          drawerIcon: () => <Feather name="home" size={24} color="black" />,
          drawerLabel: "Início"
        }} 
      />

      <Drawer.Screen 
        name="Exit" 
        component={Exit}
        options={{
          drawerIcon: () => <Ionicons name="exit-outline" size={24} color="black" />,
          drawerLabel: "Sair",
        }}
      />
    </Drawer.Navigator>
  );
} 