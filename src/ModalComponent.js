import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from "react-native-modal";
import { useState } from 'react'

const ModalComponent = () => {
  const [showmodal, setShowModal] = useState(false)
  return (
    <View style={{ flex: 1 }}>
      <Modal
        isVisible={showmodal}
        onBackdropPress={()=>setShowModal(!showmodal)}
      >
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={{
            backgroundColor: 'white',
            shadowColor: 'black',
            padding: 50,
            borderRadius: 20
          }}>
            <Text style={{
              fontSize: 25,
              fontWeight: 'bold'
            }}>Hello I Am Modal!</Text>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'lightblue',
                  padding: 10,
                  borderRadius: 10,
                  marginTop: 40,
                  borderWidth: 3
                }}
                onPress={() => setShowModal(!showmodal)}
              >
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hide Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.buttonViewStyle}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => setShowModal(!showmodal)}
        >
          <Text
            style={styles.buttonTextStyle}>Show Modal</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ModalComponent

const styles = StyleSheet.create({
  buttonViewStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: 'lightblue',
    padding: 20,
    marginBottom: 50,
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 3,
    margin: 50
  },
  buttonTextStyle: {
    fontSize: 30,
    fontWeight: 'bold'

  },

})