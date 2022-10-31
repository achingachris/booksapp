import {
  NavigationContainer,
  NavigationContainerRefContext,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native'

export default function Home() {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const handlePress = () => {
    console.log('data')
  }
  const getData = () => {
    fetch('https://fudap-books-api.herokuapp.com/books')
      .then((response) => response.json())
      .then((data) => setData(data))
    setIsLoading(false)
  }
  useEffect(() => {
    getData()
  }, [])
  const renderItem = ({ item, navigation }) => {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 80, height: 100 }}
          source={{ uri: `${item.imgUrl}` }}
          onPress={() => {
            navigation.navigate('Book', { item: item.id })
          }}
        />
        <Text>{item.title}</Text>
      </View>
    )
  }
  return (
    <View style={{ marginTop: 20 }}>
      {isLoading && <ActivityIndicator size={38} />}
      {data && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
})
