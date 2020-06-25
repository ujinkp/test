import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import {w, h} from '../../utils/Layout'; 

import CustomButton from '../../components/Button';
import Card from '../../components/Card';

const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];


  

const TodoScreen = (props) => {

    const renderItem = (item) =>  {
      console.log("ITEM",item)
      return (
      <Card title={item.item.title} />
    )};

    const keyExtractor = (item) =>  item.id;


    return (
        <>

        <View  style={styles.mainBody}>
            
            <FlatList 
                data={data}
                style={styles.list}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                />

            <View style={styles.footer}>
              <TextInput style={styles.input} />
                <CustomButton
                  title="OK"
                  style={styles.submitButton}
                />
            </View>
            <View>
            </View>
        </View>

        </>
    );
}

const styles = StyleSheet.create({
    mainBody: {
      flex:1,
    },
    footer: {
      flexDirection: 'row', 
      justifyContent: 'center'
    },
    input: {
      borderWidth: 1,
      width: w(80),
      padding:  w(3)
    },
    submitButton: {

    },
    list: {
      margin: w(5)
    }
});

export default TodoScreen;