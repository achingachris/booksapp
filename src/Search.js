import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
export default function SearchBar() {
  const handleSearch = () => {}
  return (
    <SafeAreaView style={{ marginTop: 60, flexDirection: 'row' }}>
      <View style={styles.search}>
        <TextInput placeholder='Search Book' style={styles.input} />
        {/*<TouchableOpacity>
                    <Text>Find</Text>
                </TouchableOpacity>*/}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  search: {
    marginLeft: 20,
    width: '90%',
    borderRadius: 20,
    borderWidth: 1,
    height: 40,
    flexDirection: 'row',
  },
  input: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
