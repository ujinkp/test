import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {h} from '../utils/Layout'; 

const Card = ( {title = "", style} ) => {
    return (
      <View style={[styles.item, style]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    item: {
        height: h(5)
    },
    title: {}
});

export default Card;