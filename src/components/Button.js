import * as React from 'react';
import { View, Text, Keyboard, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const CustomButton = ({title = "", style, onPress = () => null}) => {
    // console.log("PROPS",props)
    return(
        <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} 
                onPress={onPress}
                >
                <View style={[styles.buttonContainer, style]}>
                  <Text style={styles.buttonText}>{title}</Text>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
};

const styles = StyleSheet.create({
    buttonContainer:  {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#03a5fc'
    },
    buttonText: {}
});


export default CustomButton;