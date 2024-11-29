import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientButtons = ({ navigation }) => {

    return (

        <LinearGradient
            colors={['#F19ED2','#96C9F4','#729762']}
            style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer}>
                <LinearGradient
                    colors={['#00FFFF', '#329BFF', '#4C64FF']}
                    start={{ x: 0.0, y: 1.0 }}
                    end={{ x: 1.0, y: 1.0 }}
                    style={styles.grediant}
                >
                    <Text style={styles.buttonText}>Gradient Button</Text>
                </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonContainer}>
                <LinearGradient
                    colors={['#E9C46A', '#329BFF', '#B60071']}
                    start={{ x: 0, y: 1.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={styles.grediant}
                >
                    <Text style={styles.buttonText}>Gradient Button</Text>
                </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonContainer}>
                <LinearGradient
                    colors={['#402E7A', '#D6EFD8', '#FFFED3']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.grediant}
                >
                    <Text style={[styles.buttonText, { color: 'black' }]}>Gradient Button</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('GradientBorder')
                }}
                style={styles.nextButton}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Next</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

export default GradientButtons
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    grediant: {
        padding: 20,
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 2
    },
    buttonContainer: {
        flex: 1.0,
        alignSelf: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        alignSelf: 'center',
    },
    nextButton: {
        backgroundColor: 'lightblue',
        marginVertical: 100,
        padding: 10,
        borderRadius: 20,
        marginHorizontal: 100,
        alignItems: 'center',
        borderWidth: 3
    }
});