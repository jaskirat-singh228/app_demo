import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ScrollView, Modal, TouchableWithoutFeedback } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const ListWithModal = () => {
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
    const [modalVisible, setModalVisible] = useState(false);
    const [showList, setShowList] = useState(false);

    const onPressAdd = () => {
        setShowList(true);
    };
    const openModal = (user) => {
        setSelectedUser(user);
        setModalVisible(true);
    };
    const closeModal = () => {
        setModalVisible(false);
    };
    return (
        <GestureHandlerRootView>
            <View style={{ flex: 1 }}>
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
                                            <Text style={styles.listTextStyle}>Name: {item.name}</Text>
                                            <Text style={styles.listTextStyle}>Phone: {item.phone}</Text>
                                            <Text style={styles.listTextStyle}>Address: {item.address}</Text>
                                        </View>
                                        <View style={[styles.addButtonStyle, { width: 50, height: 30, justifyContent: 'center', alignSelf: 'center' }]}>
                                            <TouchableOpacity
                                                style={[styles.addButtonStyle, { width: 50, height: 30, justifyContent: 'center', alignSelf: 'center' }]}
                                                onPress={() => openModal(item)}>
                                                <Text style={[styles.buttonTextStyle, { color: 'blue' }]}>View</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </ScrollView>
                ) : null}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <TouchableWithoutFeedback onPress={closeModal}>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                {selectedUser ? (
                                    <View>
                                        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                                            <Text style={[styles.buttonTextStyle, { fontSize: 20 }]}>✖︎</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.modalText}>Name: {selectedUser.name}</Text>
                                        <Text style={styles.modalText}>Phone: {selectedUser.phone}</Text>
                                        <Text style={styles.modalText}>Address: {selectedUser.address}</Text>
                                    </View>
                                ) : null}
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
        </GestureHandlerRootView>
    )
}

export default ListWithModal;

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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
    },
    modalText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    closeButton: {
        alignItems: 'flex-end',
    }
});
