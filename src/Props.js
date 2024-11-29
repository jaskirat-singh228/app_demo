import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Props = () => {
    const [name, setName] = useState('Peter')
    return (
        <View>
            <Button
                title='Update'
                onPress={() => {
                    setName('John')
                }}
            />
            <User name={name} age={22} />
        </View>
    )
}
const User = (props) => {
    return (  
        <View>
         <Text style={styles.textstyle}>Name:{props.name}</Text>
        <Text  style={styles.textstyle}>Age:{props.age}</Text>
        </View>
    )
}

export default Props

const styles = StyleSheet.create({
    textstyle:{
        fontSize:30
    }
})