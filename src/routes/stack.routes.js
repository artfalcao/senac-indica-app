
import { createStackNavigator } from '@react-navigation/stack';
import { 
  LoginScreen, 
  RegistrationScreen, 
  ItemScreen,
  EditUserScreen } from '../pages/index';

import DrawerRoutes from './drawer.routes';

const Stack = createStackNavigator();

export default function StackRoutes() {

  return (
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
          options={{ title:'Entrar' }}
        />

        <Stack.Screen 
          name="RegistrationScreen" 
          component={RegistrationScreen} 
          options={{ title:'Cadastre-se' }}
        />

        <Stack.Screen 
          name="ItemScreen" 
          component={ItemScreen} 
          options={{ title:'Indicação' }}
        />

        <Stack.Screen 
          name="HomeScreen" 
          component={DrawerRoutes}
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="EditUserScreen" 
          component={EditUserScreen} 
          options={{ title:'Editar Dados Pessoais' }}
        />
      </Stack.Navigator>
  );
}

