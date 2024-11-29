import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListWithModal from './ListWithModal';
import ListWithBottomSheet from './ListWithBottomSheet';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tab.Navigator 
        initialRouteName='ListWithBottomSheet'
        screenOptions={1}
        >
            <Tab.Screen name="ListWithModal" component={ListWithModal} />
            <Tab.Screen name="ListWithBottomSheet" component={ListWithBottomSheet} />
        </Tab.Navigator> 
    )
}

export default BottomNavigation

const styles = StyleSheet.create({})