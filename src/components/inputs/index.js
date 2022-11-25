import React from 'react';
import {TextInput, Text, View} from 'react-native';
import styles from './input-styles';

const CustomInputs = props => {
  return (
    <>
      <View>
        <Text
          style={
            props.classLabel === 'defaultLabel'
              ? styles.defaultLabel
              : props.classLabel === 'secondaryLabel'
              ? styles.secondaryLabel
              : null
          }>
          {props.label}
        </Text>
      </View>
      <View
        style={`
                            ${
                              props.classType === 'defaultTextBox' &&
                              props.frontIcon &&
                              props.backIcon
                                ? styles.paddingTextBox
                                : null
                            }
                            ${
                              props.classType === 'defaultTextBox' &&
                              props.frontIcon
                                ? styles.paddingLeftTextBox
                                : null
                            }
                        `}>
        <TextInput
          style={styles.textBox}
          onChange={props.handleOnChange}
          value={props.value}
          placeholder={props.placeholder}
          keyboardType={props.type}
        />
      </View>

      {props.frontIcon && (
        <View className={styles.frontIconContainer}>{props.frontIcon}</View>
      )}
      {props.backIcon && (
        <View className={styles.backIconContainer}>{props.backIcon}</View>
      )}
      {props.errorMessage && (
        <Text className={styles.errorMsg}>{props.errorMessage}</Text>
      )}
    </>
  );
};

export default CustomInputs;

// Set default props
CustomInputs.defaultProps = {
  classLabel: 'defaultLabel',
  classType: 'defaultTextBox',
  type: 'default',
};
