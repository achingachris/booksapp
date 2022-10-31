import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from 'react-native'
import Home from './src/Index'
import NavApp from './src/MainNavigation'
import SearchBar from './src/Search'

export default function Books() {
  const [isLoading, setIsLoading] = useState([])
  const [data, setData] = useState(true)

  return (
    <NavigationContainer>
      <NavApp />
    </NavigationContainer>
  )
}
