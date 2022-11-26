import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './button-styles';

const CustomButton = props => {
  return (
    <>
      <TouchableOpacity
        onPress={props.onPress}
        style={
          props.btnType == 'DARK'
            ? styles.darkButton
            : props.btnType == 'LIGHT'
              ? styles.lightButton
              : null
        }
        activeOpacity={props.opactity}>
        {props.frontIcon && (
          <Image source={props.frontIcon} style={styles.frontIcon} />
        )}
        <Text
          style={
            props.btnType == 'DARK'
              ? styles.darkButtonText
              : props.btnType == 'LIGHT'
                ? styles.lightButtonText
                : null
          }>
          {props.btnLabel}
        </Text>
        {props.rearIcon && (
          <Image source={props.rearIcon} style={styles.rearIcon} />
        )}
      </TouchableOpacity>
    </>
  );
};

export default CustomButton;

// Set default props
CustomButton.defaultProps = {
  btnType: 'DARK',
  opactity: 0.85,
};
