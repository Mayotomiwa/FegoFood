import Colors from '@/constants/Colors'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const Seperator = () => {
  return (
    <View style={styles.hr} />
  )
}

export default Seperator

const styles = StyleSheet.create({
    hr: {
        margin: 0,
        padding: 0,
        width: '60%',
        justifyContent: 'center',
        height: 1,
        backgroundColor: Colors.primary,
      },
})