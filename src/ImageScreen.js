import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ImageScreen = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('LoginScreen')
            }}>
                
                <Image
                    style={styles.ImageStyle}
                    source={require('../src/beach.jpg')} />
            </TouchableOpacity>

        </View>
    )
}

export default ImageScreen

const styles = StyleSheet.create({
    ImageStyle: {
        height: 200,
        width: 200,
        alignSelf: 'center',
        marginVertical:180

    }
})