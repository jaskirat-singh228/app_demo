import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { titleList } from './data';


const LoginScreen = ({ navigation }) => {
    const pageNavigation = (title) =>{
        if(title=="useState"){
            navigation.navigate('EnterName')
        }
        else if(title=="Props"){
            navigation.navigate('Props')
        }
        else if(title=="Image"){
            navigation.navigate('ImageScreen')
        }
        else if(title=="Gradient"){
            navigation.navigate('GradientButtons')
        }
        else if(title=="Selaction"){
            navigation.navigate('Selaction')
        }
        else if(title=="CheckBoxScreen"){
            navigation.navigate('CheckBoxScreen')
        }
        else if(title=="CheckBox"){
            navigation.navigate('CheckBox')
        }
        else if(title=="RadioButton"){
            navigation.navigate('RadioButton')
        }
        else if(title=="RadioGroupButton"){
            navigation.navigate('RadioGroupButton')
        }
        else if(title=="SwitchButton"){
            navigation.navigate('SwitchButton')
        }
        else if(title=="Modal"){
            navigation.navigate('ModalComponent')
        }
        else if(title=="BottomSheet"){
            navigation.navigate('BottomSheet')
        }
        else if(title=="ListWithModal"){
            navigation.navigate('ListWithModal')
        }
        else if(title=="ListWithBottomSheet"){
            navigation.navigate('ListWithBottomSheet')
        }
        else if(title=="BottomNavigation"){
            navigation.navigate('BottomNavigation')
        }
        else if(title=="DrawerNavigation"){
            navigation.navigate('DrawerNavigation')
        }
    }
    return (
        <ScrollView>
            <View style={{}}>
                {
                    titleList.map((item, index) => (
                        <TouchableOpacity
                        key={item.id}
                            style={styles.style}
                            onPress={()=>pageNavigation(item?.title)}>
                            <Text style={styles.textStyle}>{item?.title}</Text>
                        </TouchableOpacity>
                    ))
                }

                {/* <TouchableOpacity
                    style={styles.style}
                    onPress={() => {
                        navigation.navigate('EnterName')
                    }}>
                    <Text style={styles.textStyle}>useState</Text>
                </TouchableOpacity>



                <TouchableOpacity
                    style={styles.style}
                    onPress={() => {
                        navigation.navigate('Props')
                    }}>
                    <Text style={styles.textStyle}>Props</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.style}
                    onPress={() => {
                        navigation.navigate('ImageScreen')
                    }}>
                    <Text style={styles.textStyle}>Images</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.style}
                    onPress={() => {
                        navigation.navigate('HTTP')
                    }}>
                    <Text style={styles.textStyle}>HTTP</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.style}
                    onPress={() => {
                        navigation.navigate('Animation')
                    }}>
                    <Text style={styles.textStyle}>Animation</Text>
                </TouchableOpacity> */}
            </View>
            </ScrollView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    style: {
        backgroundColor: 'lightblue',
        marginHorizontal: 20,
        marginVertical: 5,
        padding: 10,
        borderRadius: 10,
        borderWidth: 3,

    },
    textStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
})