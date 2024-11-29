import { StyleSheet, Text, TextInput, View, SafeAreaView, Button } from 'react-native'
import React, { useState } from 'react'

const App = ({ navigation }) => {
  const [name, setName] = useState('')
  return (
    <View>
      <TextInput
        style={styles.style}
        placeholder='Enter Name'
        onChangeText={(item) => {
          setName(item)
        }}
        value={name}
      />
      <Text style={{ fontSize: 30 }}>Your name is {name}</Text>
      <Button
        title='ok'
        onPress={() => {
          setName('')
        }}
      />
      <Button
        title='Next'
        onPress={() => {
          navigation.navigate('SimpleForm')
        }}
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  style: {
    padding: 20,
    borderWidth: 2,
    borderColor: 'blue',
    fontSize: 30,
    margin: 20,
    borderRadius: 20

  }
})