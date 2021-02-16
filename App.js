import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/Screens/Home';
import RestaurantDetail from './src/Screens/RestaurantDetail';


const Stack = createStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
          headerStyle: {
            height:60
          },
          headerTitleStyle: {
            fontSize:16,
          }
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
          headerTitleStyle: {
            alignSelf: 'center'
          }
        }} />

        <Stack.Screen
          name="Details"
          component={RestaurantDetail}
          options={({ route }) => ({ title: route.params.title })}
          />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;