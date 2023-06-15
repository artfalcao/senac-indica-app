import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from "@expo/vector-icons";

import TabRoutes from './tab.routes';

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
    </Drawer.Navigator>
  );
} 