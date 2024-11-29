import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const SimpleForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [display, setDisplay] = useState(false)
  const resetFormData = () => {
    setDisplay(false)
    setName('')
    setEmail('')
    setPassword('')
  }
  return (
    <SafeAreaView>
      <View>
        <Text style={{ fontSize: 30 }}>Simle Form</Text>
        <TextInput
          style={styles.style}
          placeholder='Enter Name'
          onChangeText={(item) => {
            setName(item)
          }}
          value={name}

        />
        <TextInput
          style={styles.style}
          placeholder='Enter Email'
          onChangeText={(item) => {
            setEmail(item)

          }}
          value={email}
        />
        <TextInput
          style={styles.style}
          placeholder='Enter Password'
          secureTextEntry={true}
          onChangeText={(item) => {
            setPassword(item)

          }}
          value={password}
        />
        <Button title='Print Details'
          onPress={() => {
            setDisplay(true)
          }}
        />
        <Button title='Clear Details'
          onPress={resetFormData}
        />
        <View>
          {
            display ?
              <View style={{alignItems:'center'}}>
                <Text style={{fontSize:20,marginTop:20}}>User name is: {name}</Text>
                <Text style={{fontSize:20}}>User password is: {password}</Text>
                <Text style={{fontSize:20}}>User email is: {email}</Text>
              </View>
              : null
          }
        </View>
      </View>
    </SafeAreaView>

  )
}

export default SimpleForm

const styles = StyleSheet.create({
  style: {
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'red',
    padding: 10,
    margin: 10,
    borderRadius: 10
  }
})