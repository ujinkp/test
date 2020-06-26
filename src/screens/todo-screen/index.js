import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import {w, h} from '../../utils/Layout'; 

import CustomButton from '../../components/Button';
import Card from '../../components/Card';
               
        
const TodoScreen = (props) => {

  const [data, setData] = useState(() => []);
  const [text, setText] = useState('');
  const changeText = text => setText(text)
          
  const addData = (item) => {
    if(text.length > 0) {
      setData([
        ...data, 
        {id: item.id, title: text, isComplete: false }
      ])
    }
    setText('')
  };
          
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
                <TextInput
                  onChangeText={changeText}
                  style={styles.input}
                  placeholder="Enter To do"
                  value={text}
                />
                <CustomButton
                  title="+"
                  style={styles.submitButton}
                  onPress={addData}
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
      padding: w(3)
    },
    list: {
      margin: w(5)
    }
});

export default TodoScreen;