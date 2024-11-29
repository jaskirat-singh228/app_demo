import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RadioButton from './RadioButton';
import SwitchButton from './SwitchButton';

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='RadioButton' component={RadioButton} />
      <Drawer.Screen name='SwitchButton' component={SwitchButton} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})