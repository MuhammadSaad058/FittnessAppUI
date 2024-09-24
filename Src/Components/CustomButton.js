import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const CustomButton = ({ mainStyle, ButtonTitle, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, mainStyle]} onPress={onPress}>
      <Text style={styles.buttonText}>{ButtonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6A1B9A',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
