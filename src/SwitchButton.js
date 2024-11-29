import { Text, View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Switch } from 'react-native-switch';

const SwitchButton = () => {
  const [isOn, setIsOn] = useState(false)
  return (
    <View style={styles.style}>
      <Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 200 }}>Button Is {isOn ? 'On' : 'Off'}</Text>
      <Switch
        value={isOn}
        onValueChange={() => {
          setIsOn(!isOn)
        }}
        // disabled={true}
        activeText='Yes'
        activeTextStyle={{fontSize:50,fontWeight:'bold'}}
        inActiveText='No'
        inactiveTextStyle={{fontSize:50,fontWeight:'bold'}}
        // barHeight={50}
        circleSize={100}
        backgroundActive='green'
        backgroundInactive='red'
        // renderActiveText={false}
        // renderInActiveText={false}
        renderInsideCircle={() => <Text style={{fontSize:30}}>{isOn ? 'On' : 'Off'}</Text>}
        circleBorderWidth={3}
        circleBorderActiveColor='red'
        circleBorderInactiveColor='green'
        circleActiveColor='white'
        circleInActiveColor='lightgray'
        switchBorderRadius={50}
        switchWidthMultiplier={2}
      />
    </View>
  );
}

export default SwitchButton
const styles = StyleSheet.create({
  style: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center'
  }
})
