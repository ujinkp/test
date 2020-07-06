import * as React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import Card from './Card';
import { w, h } from '../utils/Layout';

const CustomList = ({ data, removeItem, completeItem }) => {

    const renderItem = ({ item }) =>
        <Card
            title={item.title}
            remove={() => removeItem(item.id)}
            complete={() => completeItem(item.id)}
            isComplete={item.isComplete}
        />

    return (
        <View style={styles.mainBody}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
    },
    list: {
        margin: w(5)
    }
});


export default CustomList;