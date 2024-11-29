import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/LoginScreen';
import EnterName from './src/EnterName';
import Props from './src/Props';
import SimpleForm from './src/SimpleForm';
import ImageScreen from './src/ImageScreen';
import GradientButtons from './src/Gradient/GradientButtons';
import Selaction from './src/Selaction';
import GradientBorder from './src/Gradient/GradientBorder';
import CheckBoxScreen from './src/CheckBoxScreen';
import SwitchButton from './src/SwitchButton';
import RadioButton from './src/RadioButton';
import RadioGroupButton from './src/RadioGroupButton';
import CheckBox from './src/CheckBox';
import ModalComponent from './src/ModalComponent';
import BottomSheet from './src/BottomSheet';
import ListWithModal from './src/ListWithModal';
import ListWithBottomSheet from './src/ListWithBottomSheet';
import BottomNavigation from './src/BottomNavigation';
import DrawerNavigation from './src/DrawerNavigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="EnterName" component={EnterName} />
        <Stack.Screen name="SimpleForm" component={SimpleForm} />
        <Stack.Screen name="Props" component={Props} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen name="GradientButtons" component={GradientButtons} />
        <Stack.Screen name="GradientBorder" component={GradientBorder} />
        <Stack.Screen name="Selaction" component={Selaction} />
        <Stack.Screen name="CheckBoxScreen" component={CheckBoxScreen} />
        <Stack.Screen name="CheckBox" component={CheckBox} />
        <Stack.Screen name="SwitchButton" component={SwitchButton} />
        <Stack.Screen name="RadioButton" component={RadioButton} />
        <Stack.Screen name="RadioGroupButton" component={RadioGroupButton} />
        <Stack.Screen name="ModalComponent" component={ModalComponent} />
        <Stack.Screen name="BottomSheet" component={BottomSheet} />
        <Stack.Screen name="ListWithModal" component={ListWithModal} />
        <Stack.Screen name="ListWithBottomSheet" component={ListWithBottomSheet} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})