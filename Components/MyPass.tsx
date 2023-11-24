import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MyPass() {
  return (
    <View style={styles.container}>
      <Text>MyPass</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    flex : 1,
    backgroundColor: '#d4caf7',

  }})