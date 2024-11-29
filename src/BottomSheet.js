import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import { Modalize } from 'react-native-modalize';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const BottomSheet = () => {
    const modalizeRef = useRef(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    return (
        <GestureHandlerRootView style={{ flex: 1, alignItems: 'center' }}>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={onOpen}>
                <Text style={styles.buttonTextStyle}>Open The Bottom Sheet</Text>
            </TouchableOpacity>
            <Modalize
                ref={modalizeRef}
                snapPoint={600}
                modalHeight={300}
                keyboardAvoidingBehavior='height'

            // closeOnOverlayTap={false}
            // modalTopOffset={300}
            // alwaysOpen={260}
            // adjustToContentHeight={true}
            // handlePosition='inside'
            //handleStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            // disableScrollIfPossible={true}
            // avoidKeyboardLikeIOS={ios = true}

            >
                <View style={styles.bottomSheetViewStyle}>
                    <Text>
                        hello
                    </Text>
                </View>
            </Modalize>
        </GestureHandlerRootView>
    );
}

export default BottomSheet

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#E3A5C7',
        padding: 15,
        borderRadius: 5,
        borderWidth: 2,
        marginVertical: 230
    },
    buttonTextStyle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    bottomSheetViewStyle: {
        alignItems: 'center'
    }
})