import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const RadioButton = () => {
  const [color1, setColor1] = useState(true)

  const RadioComponent1 = ({ onButtonPress }) => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity onPress={onButtonPress}>
          <View style={styles.viewStyle}>
            <View style={[styles.style, { backgroundColor: !color1 ? 'black' : null }]}></View>
          </View>
        </TouchableOpacity>
        <View style={{ justifyContent: 'center', width: 100, alignItems: 'baseline' }}>
          <Text style={{ fontSize: 20, marginHorizontal: 10, fontWeight: 'bold' }}>Male</Text>
        </View>
      </View>

    )
  }
  const RadioComponent2 = ({ onButtonPress }) => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={onButtonPress}>
          <View style={styles.viewStyle}>
            <View style={[styles.style, { backgroundColor: !color1 ? 'white' : 'black' }]}></View>
          </View>
        </TouchableOpacity>
        <View style={{ justifyContent: 'center', width: 100, alignItems: 'center' }}>
          <Text style={{ fontSize: 20, marginHorizontal: 1, fontWeight: 'bold' }}>Female</Text>
        </View>
      </View>

    )
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.textStyle}>Custom Radio Button</Text>
      <RadioComponent1 onButtonPress={() => {
        Alert.alert('Male')
        setColor1(!color1)
      }} />
      <RadioComponent2 onButtonPress={() => {
        Alert.alert('Female')
        setColor1(!color1)

      }} />
    </View>
  )
}

export default RadioButton

const styles = StyleSheet.create({
  viewStyle: {
    height: 50,
    width: 50,
    borderWidth: 3,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  style: {
    height: 30,
    width: 30,
    borderRadius: 30,
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  }
})