import React from 'react'
import {
  BaseNavigationContainer,
  NavigationContainer,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Index'
import Books from '../App'

const Stack = createNativeStackNavigator()

export default function NavApp() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='BookData' component={Books} />
    </Stack.Navigator>
  )
}
