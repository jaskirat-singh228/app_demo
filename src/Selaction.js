import { FlatList, StyleSheet, Text, TouchableOpacity, View, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';

const Selection = () => {
    const [selectedData, setSelectedData] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    const listData = [
        { id: 1, name: 'Kirat' },
        { id: 2, name: 'Aman' },
        { id: 3, name: 'Rahul' },
        { id: 4, name: 'Rehan' },
        { id: 5, name: 'Navdeep' },
        { id: 6, name: 'Rajbir' },
        { id: 7, name: 'Karan' },
        { id: 8, name: 'Preet' },
        { id: 9, name: 'Ankit' },
        { id: 10, name: 'Deepak' }
    ];

    const onPressItem = (id) => {
        let newSelectedData = [...selectedData];
        if (newSelectedData.includes(id)) {
            newSelectedData = newSelectedData.filter(item => item !== id);
        } else {
            newSelectedData.push(id);
        }
        setSelectedData(newSelectedData);
        if (selectAll && !newSelectedData.includes(id)) {
            setSelectAll(false);
        }
    };

    const onSelectAll = () => {
        if (selectAll) {
            setSelectedData([]);
        } else {
            const allIds = listData.map(item => item.id);
            setSelectedData(allIds);
        }
        setSelectAll(!selectAll);
    };

    const onShowResult = () => {
        if (selectedData.length === 0) {
            Alert.alert('No items selected', 'Please select at least one item.')
        } else {
            const selectedItems = listData.filter(item => selectedData.includes(item.id))
            let message = '';
            selectedItems.forEach(item => {
                message += `ID: ${item.id}, Name: ${item.name}`
                message += '\n'
            });
            Alert.alert('Selected Items', message);
        }
    };

    return (
        <ScrollView>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5 }}>
                    <TouchableOpacity
                        style={styles.ResultButtonStyle}
                        onPress={onShowResult}
                    >
                        <Text>Result</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.selectButtonStyle}
                        onPress={onSelectAll}
                    >
                        <Text>{selectAll ? 'Unselect All' : 'Select All'}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        data={listData}
                        renderItem={({ item }) => {
                            const isSelected = selectedData.includes(item.id);
                            return (
                                <TouchableOpacity
                                    style={[
                                        styles.listStyle,
                                        {borderColor:isSelected?'red':'yellow'}
                                    ]}
                                    onPress={() => onPressItem(item.id)}
                                >
                                    <View>
                                        <Text style={styles.textStyle}>Id-{item.id}</Text>
                                        <Text style={styles.textStyle}>Name-{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={(item) => item.id.toString()}
                    />

                </View>
            </View>
        </ScrollView>
    );
};

export default Selection;

const styles = StyleSheet.create({
    listStyle: {
        backgroundColor: 'yellow',
        padding: 10,
        margin: 5,
        borderRadius: 5,
       borderWidth:3
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    selectButtonStyle: {
        backgroundColor: 'lightblue',
        padding: 5,
        marginLeft: 10,
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
    },
    ResultButtonStyle: {
        backgroundColor: 'lightblue',
        padding: 5,
        marginRight: 10,
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
    },
});
