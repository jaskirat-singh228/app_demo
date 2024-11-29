import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const  GradientBorder = ()=> {
    
        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={['#00FFFF', '#329BFF', '#4C64FF']}
                    start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                    style={styles.grediant}
                >
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>
                            LOGIN
                         </Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        );
    }

export default GradientBorder
const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        justifyContent: 'center',
    },
    grediant: {
        height: 44,
        width: 300,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttonContainer: {
        flex: 1.0,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: '99%',
        margin: 1
    },
    buttonText: {
        textAlign: 'center',
        color: '#4C64FF',
        alignSelf: 'center',
    }
});