import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './Input.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  iconName,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.text_container}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
      />
      <Icon name={iconName} size={40} color="gray" />
    </View>
  );
};

export default Input;
