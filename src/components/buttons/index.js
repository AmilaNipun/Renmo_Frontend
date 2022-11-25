import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import styles from './button-styles';

const CustomButton = props => {
  return (
    <>
      {props.isIconBtn ? (
        <>
          <TouchableOpacity
            onPress={props.onPress}
            style={
              props.btnType == 'PRIMARY'
                ? styles.primaryIconButton
                : props.btnType == 'TRANSPARENT'
                ? styles.transparentIconButton
                : props.btnType == 'LIGHT'
                ? styles.lightIconButton
                : null
            }
            activeOpacity={props.opactity}>
            <Image source={props.icon} style={styles.btnIcon} />
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity
          onPress={props.onPress}
          style={
            props.btnType == 'PRIMARY'
              ? styles.primaryButton
              : props.btnType == 'SECONDARY'
              ? styles.secondaryButton
              : props.btnType == 'DARK'
              ? styles.darkButton
              : props.btnType == 'DARKLOGO'
              ? styles.darkLogoButton
              : props.btnType == 'SECONDARYLOGO'
              ? styles.secondaryLogoButton
              : null
          }
          activeOpacity={props.opactity}>
          {props.frontIcon && (
            <Image source={props.frontIcon} style={styles.frontIcon} />
          )}
          <Text
            style={
              props.btnType == 'PRIMARY'
                ? styles.primaryButtonText
                : props.btnType == 'SECONDARY'
                ? styles.secondaryButtonText
                : props.btnType == 'DARK'
                ? styles.darkButtonText
                : props.btnType == 'DARKLOGO'
                ? styles.darkButtonText
                : props.btnType == 'SECONDARYLOGO'
                ? styles.secondaryButtonText
                : null
            }>
            {props.btnLabel}
          </Text>
          {props.rearIcon && (
            <Image source={props.rearIcon} style={styles.rearIcon} />
          )}
        </TouchableOpacity>
      )}
    </>
  );
};

export default CustomButton;

// Set default props
CustomButton.defaultProps = {
  btnType: 'PRIMARY',
  opactity: 0.85,
  isIconBtn: false,
};
