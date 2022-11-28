import React from 'react';
import { Layout, Text, Input } from '@ui-kitten/components';
import styles from './input-styles';

const CustomInputs = props => {
  return (
    <>
      <Layout>
        <Input
          label={props.label}
          onFocus={props.onFocus}
          placeholder={props.placeholder}
          value={props.value}
          autoCapitalize={props.autoCapitalize}
          onChangeText={props.onChangeText}
          onChange={props.onChange}
          disabled={props.disabled}
          status={props.status}
          caption={props.caption}
          secureTextEntry={props.secureTextEntry}
          size={props.size}
          multiline={props.multiline}
          textStyle={props.textStyle}
          accessoryLeft={props.iconLeft}
          accessoryRight={props.iconRight}
          onBlur={props.onBlur}
          keyboardType={props.keyboardType}
          style={
            props.inputType == 'PRIMARY'
              ? styles.textInputPrimary
              : props.inputType == 'SECONDARY'
                ? styles.textInputSecondary
                : null
          }
        />

        {props.errorMessage && (
          <Text className={styles.errorMsg} status="danger">
            {props.errorMessage}
          </Text>
        )}
      </Layout>
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
