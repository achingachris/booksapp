import React from 'react'
import { Text, View } from 'react-native'
import { Image } from 'react-native-web'

function Card({ navigation, route }) {
  const { item } = route.params
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 80, height: 100 }}
        source={{ uri: `${item.imgUrl}` }}
      />
      <Text>{item.title}</Text>
      <Text>{item.subtitle}</Text>
      <Text>{item.description}</Text>
    </View>
  )
}

export default Card
