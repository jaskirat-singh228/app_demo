import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox'

const CheckBox1 = () => {
    const [isChecked, setIsChecked] = useState({
        A:false,
        B:false,
        C:false,
        D:false,
        E:false,
        F:false,
        G:false,
        H:false,
        I:false,
        J:false
    });
    return (
        <View style={styles.checkBoxStyle}>
            <CheckBox
            style={{margin:10}}
                value={isChecked.A}
                onValueChange={() => {
                    setIsChecked({...isChecked,A:!isChecked})
                }}
                // isChecked={false}
                disabled={false} 
                />
                 <CheckBox
                  style={{margin:10}}
                  value={isChecked.B}
                  onValueChange={() => {
                      setIsChecked({...isChecked,B:!isChecked})
                  }}
                disabled={false} 
                lineWidth={5}
                
                />
                 <CheckBox
                  style={{margin:10}}
                  value={isChecked.C}
                  onValueChange={() => {
                      setIsChecked({...isChecked,C:!isChecked})
                  }}
                disabled={false} 
                lineWidth={5}
                hideBox={true}
               
                />
                 <CheckBox
                  style={{margin:10}}
                  value={isChecked.D}
                  onValueChange={() => {
                      setIsChecked({...isChecked,D:!isChecked})
                  }}
                disabled={false} 
                lineWidth={5}
                boxType='square'
                
                />
                 <CheckBox
                  style={{margin:10}}
                  value={isChecked.E}
                  onValueChange={() => {
                      setIsChecked({...isChecked,E:!isChecked})
                  }}
                disabled={false} 
                lineWidth={5}
                boxType='square'
                tintColor='red'
              
                
                />
                 <CheckBox
                  style={{margin:10}}
                  value={isChecked.F}
                  onValueChange={() => {
                      setIsChecked({...isChecked,F:!isChecked})
                  }}
                disabled={false} 
                lineWidth={5}
                boxType='circle'
                onCheckColor='green'
                animationDuration={2}
                
                
                />
                 <CheckBox
                  style={{margin:10}}
                  value={isChecked.G}
                  onValueChange={() => {
                      setIsChecked({...isChecked,G:!isChecked})
                  }}
                disabled={false} 
                lineWidth={3}
                boxType='square'
                onCheckColor='blue'
                onFillColor='red'
                onTintColor='black'
                
                />
                 <CheckBox
                  style={{margin:10}}
                  value={isChecked.H}
                  onValueChange={() => {
                      setIsChecked({...isChecked,H:!isChecked})
                  }}
                disabled={false} 
                lineWidth={5}
                boxType='square'
                onTintColor='red'
                animationDuration={2}
                
                />
                 <CheckBox
                  style={{margin:10}}
                  value={isChecked.I}
                  onValueChange={() => {
                      setIsChecked({...isChecked,I:!isChecked})
                  }}
                disabled={false} 
                lineWidth={4}
                onTintColor='red'
                animationDuration={1}
                onAnimationType='fade'
                offAnimationType='fade'
                />
        </View>
    )
}

export default CheckBox1

const styles = StyleSheet.create({
    checkBoxStyle: {
        flex: 1,
        alignItems: 'center'
    }
})