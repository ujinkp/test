import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { h, w } from '../utils/Layout';
import CustomButton from '../components/Button';

const Card = ({ title = "", remove, complete, isComplete }) => {
  return (
    <View style={{ ...styles.itemBody, backgroundColor: isComplete ? "#786f6e" : "#03a5fc" }}>
      <View style={styles.itemText}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <CustomButton
          title={isComplete ? "d" : "v"}
          style={styles.doneButton}
          onPress={complete}
        />
        <CustomButton
          title="х"
          style={styles.deleteButton}
          onPress={remove}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemBody: {
    flex: 1,
    flexDirection: 'row',
    margin: w(1),
    backgroundColor: '#03a5fc',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1
  },
  doneItemBody: {
    backgroundColor: '#786f6e',
  },
  itemText: {
    width: '80%'
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
    backgroundColor: 'green',
  },
  deleteButton: {
    margin: null,
    padding: w(1),
    borderRadius: null,
    backgroundColor: 'red'
  }
});

export default Card;