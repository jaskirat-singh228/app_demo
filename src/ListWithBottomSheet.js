import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';

const ListWithBottomSheet = () => {
    const [userList, setUserList] = useState([
        { name: 'Kirat', phone: 9837640598, address: 'Morinda' },
        { name: 'Raman', phone: 8376490276, address: 'TDI City' },
        { name: 'Rahul', phone: 6378940126, address: 'Derabassi' },
        { name: 'Rehan', phone: 4563789076, address: 'Kurali' },
        { name: 'Navdeep', phone: 9875092456, address: 'Kharar' },
        { name: 'Rajbir', phone: 5467839021, address: 'Landran' },
        { name: 'Karan', phone: 6478902678, address: 'Blongi' },
        { name: 'Preet', phone: 4567725160, address: 'Daun' },
        { name: 'Ankit', phone: 4678590243, address: 'Desu Majra' },
        { name: 'Deepak', phone: 8876489153, address: 'Sunny Enclave' }
    ]);
    const [selectedUser, setSelectedUser] = useState('');
    const [showList, setShowList] = useState(false);
    const modalizeRef = useRef('');
    const onPressAdd = () => {
        setShowList(true);
    };

    const onOpen = (item) => {
        setSelectedUser(item);
        modalizeRef.current?.open();
    };
    const onClose = (item) => {
        setSelectedUser(item);
        modalizeRef.current?.close();
    };


    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View>
                <View style={styles.mainView}>
                    <TextInput
                        style={styles.TextInputStyle}
                        placeholder='Name'
                    />
                    <TextInput
                        style={styles.TextInputStyle}
                        placeholder='Phone'
                    />
                </View>
                <View style={styles.mainView}>
                    <TextInput
                        style={styles.TextInputStyle}
                        placeholder='Address'
                    />
                    <View style={styles.addView}>
                        <TouchableOpacity
                            style={styles.addButtonStyle}
                            onPress={onPressAdd}
                        >
                            <Text style={styles.buttonTextStyle}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {showList ? (
                    <ScrollView>
                        <FlatList
                            data={userList}
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.listStyle}>
                                        <View>
                                            <Text style={styles.listTextStyle}>Name- {item.name}</Text>
                                            <Text style={styles.listTextStyle}>Phone- {item.phone}</Text>
                                            <Text style={styles.listTextStyle}>Address- {item.address}</Text>
                                        </View>
                                        <View>
                                            <TouchableOpacity
                                                style={[styles.addButtonStyle, { width: 50, height: 30, justifyContent: 'center', marginTop: 20 }]}
                                                onPress={() => onOpen(item)}>
                                                <Text style={[styles.buttonTextStyle, { color: 'blue' }]}>View</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </ScrollView>
                ) : null}

            </View>
            <Modalize
                handleStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                ref={modalizeRef}
                snapPoint={260}
                modalTopOffset={300}
                closeOnOverlayTap={true}
                handlePosition='inside'
            >
                <View style={styles.bottomSheetContainer}>
                    {selectedUser ? (
                        <View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <TouchableOpacity
                                    onPress={onClose}
                                    style={{ marginLeft: 300 }}
                                >
                                    <Text style={{ fontSize: 20 }}>✖︎</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.bottomSheetText}>Name- {selectedUser.name}</Text>
                            <Text style={styles.bottomSheetText}>Phone- {selectedUser.phone}</Text>
                            <Text style={styles.bottomSheetText}>Address- {selectedUser.address}</Text>
                        </View>
                    ) : null}
                </View>
            </Modalize>
        </GestureHandlerRootView>
    )
}

export default ListWithBottomSheet;

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    TextInputStyle: {
        padding: 10,
        borderWidth: 1,
        width: 180,
        borderRadius: 5,
        margin: 5,
        marginLeft: 3
    },
    addView: {
        width: 120,
        marginRight: 13,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    buttonTextStyle: {
        fontWeight: 'bold',
    },
    addButtonStyle: {
        width: 60,
        padding: 5,
        alignItems: 'center',
        backgroundColor: 'lightgreen',
        margin: 5,
        borderRadius: 5,
        marginLeft: 3,
        borderWidth: 3
    },
    listStyle: {
        backgroundColor: 'skyblue',
        borderWidth: 2,
        padding: 10,
        margin: 3,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listTextStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    bottomSheetContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    },
    bottomSheetText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    closeButton: {
        alignItems: 'flex-end',
    }
});
