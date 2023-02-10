import React from 'react';


import Home from './Screens/Home';
import Scanner from './Screens/Scanner';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack= createNativeStackNavigator()

function App(){
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#2196f3",
      },
      headerTitleStyle: {
        color: 'white',
        alignItems:'center',
        justifyContent:'center',
      },      
    }} >
      <Stack.Screen name="Home" options={{ title: "QR Scanner"}} component={Home}/>
      <Stack.Screen name="Scanner" component={Scanner}/>
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  );
}