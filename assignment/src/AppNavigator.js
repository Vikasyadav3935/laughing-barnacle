import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './Screens/Login'
import Inception from './Screens/Inception'

const AppNavigator = () => {
    const Stack=createStackNavigator();
  return (
   <NavigationContainer>
    <Stack.Navigator>

        <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}  />
        <Stack.Screen name="Incpection" component={Inception}  options={{headerShown:false}}  />
    </Stack.Navigator>

   </NavigationContainer>
  )
}

export default AppNavigator