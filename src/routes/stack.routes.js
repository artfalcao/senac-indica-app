
import { createStackNavigator } from '@react-navigation/stack';
import { 
  LoginScreen, 
  RegistrationScreen, 
  ItemScreen } from '../pages/index';

import DrawerRoutes from './drawer.routes';

const Stack = createStackNavigator();

export default function StackRoutes() {

  return (
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title:'Entrar' }}
        />

        <Stack.Screen 
          name="Registration" 
          component={RegistrationScreen} 
          options={{ title:'Cadastre-se' }}
        />

        <Stack.Screen 
          name="ItemScreen" 
          component={ItemScreen} 
          options={{ title:'Indicação' }}
        />

        <Stack.Screen 
          name="Home" 
          component={DrawerRoutes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
}

