import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {h, w, width} from '../utils/Layout'; 

import CustomButton from '../components/Button';

const Card = ( {title = "", style} ) => {
    return (
      <View style={[styles.item, style]}>
        <View style={{width: '80%'}}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <CustomButton
            title="v"
            style={styles.doneButton}
            // onPress={addData}
          />
          <CustomButton
            title="х"
            style={styles.deleteButton}
            // onPress={addData}
          />
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    item: {
      flex: 1,
      flexDirection: 'row',
      height: h(6),
      margin: w(1),
      backgroundColor: '#03a5fc',
      alignItems: 'flex-start',
      justifyContent: 'center',
      borderColor: 'black',
      borderWidth: 1
    },
    title: {
      padding: w(1),
      color: 'black',
      width: '80%'
    },
    doneButton: {
      margin: null,
      padding: w(1),
      borderRadius: null,
      backgroundColor: 'green'
    },
    deleteButton: {
      margin: null,
      padding: w(1),
      borderRadius: null,
      backgroundColor: 'red'
    }
});

export default Card;