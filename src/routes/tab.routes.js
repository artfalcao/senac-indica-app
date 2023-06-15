import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
  Feather, 
  MaterialCommunityIcons, 
  MaterialIcons  } from "@expo/vector-icons";
import { 
  HomeScreen, 
  FilterScreen,
  AddScreen,
  UserScreen } from '../pages';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator 
      screenOptions={{ headerShown: false }} 
      initialRouteName={'HomeScreen'} 
      initialParams={{ filterLocals : [], filterTypes: [] }}
    >
      <Tab.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ 
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color="#B66E6F" />,
          tabBarShowLabel: false
         }}
        initialParams={{ filterLocals : [], filterTypes: [] }}  
      />

      <Tab.Screen 
        name="FilterScreen" 
        component={FilterScreen} 
        options={{ 
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="magnify" size={size} color="#B66E6F" />,
          tabBarShowLabel: false
         }}  
         initialParams={{ filterLocals : [], filterTypes: [] }}
      />

      <Tab.Screen 
        name="AddScreen" 
        component={AddScreen} 
        options={{ 
          tabBarIcon: ({ color, size }) => <MaterialIcons name="add-a-photo" size={size} color="#B66E6F" />,
          tabBarShowLabel: false
         }}  
      />


      <Tab.Screen 
        name="UserScreen" 
        component={UserScreen} 
        options={{ 
          tabBarIcon: ({ color, size }) => <Feather name="user" size={size} color="#B66E6F" />,
          tabBarShowLabel: false
         }} 
      />
    </Tab.Navigator>
  );
}