import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, FlatList } from 'react-native'
export default function Books() {
  const [isLoading, setIsLoading] = useState([])
  const [data, setData] = useState(true)
  const [usersData, setUsersData] = useState([])
  const getData = () => {
    fetch('https://fudap-books-api.herokuapp.com/books')
      .then((response) => response.json())
      .then((data) => setData(data))
    setIsLoading(false)
  }
  useEffect(() => {
    getData()
  }, [])
  const renderItem = ({ item }) => {
    return <Text>{item.title}</Text>
  }
  return (
    <View>
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
