import React, {useState} from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import {w, h} from '../../utils/Layout'; 
import CustomButton from '../../components/Button';
import CustomList from '../../components/List';

        
const TodoScreen = (props) => {

  const [data, setData] = useState(() => []);
  const [text, setText] = useState('');
  const changeText = text => setText(text)
          
  const addData = (item) => {
    console.log2("ITEM",item)
    if(text.length > 0) {
      setData([
        ...data, 
        {id: item.id, title: "text" }
      ])
    }
    setText('')
  };

  const removeItem = (id) => {
    setData(data.filter(item => item.id !== id))
  };

  const completeItem = id => {
    setData(data.map(item => {
        return item.id === id ? {...item, isComplete: !item.isComplete} : item
    }))
}
    return (
        <>

        <View  style={styles.mainBody}>
                <CustomList
                  data={data}
                  removeItem={removeItem}
                  completeItem={completeItem}
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