import React from 'react';
import {
  Layout,
  Text,
  Autocomplete,
  AutocompleteItem,
} from '@ui-kitten/components';
import styles from './auto-complete-styles';

const CustomAutoComplete = props => {
  const renderOption = (item, index) => (
    <AutocompleteItem key={index} title={item.label} />
  );

  return (
    <>
      <Layout
        style={
          props.inputBackground === 'light'
            ? styles.lightBackground
            : styles.thickBackground
        }>
        <Autocomplete
          onSelect={props.onSelect}
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
          maxLength={props.maxLength}
          ref={props.ref}
          style={
            props.inputType === 'PRIMARY'
              ? styles.textInputPrimary
              : props.inputType === 'SECONDARY'
                ? styles.textInputSecondary
                : null
          }>
          {props.items.map(renderOption)}
        </Autocomplete>

        {props.errorMessage && (
          <Text style={styles.errorMsg} status="danger">
            {props.errorMessage}
          </Text>
        )}
      </Layout>
    </>
  );
};

export default CustomAutoComplete;

// Set default props
CustomAutoComplete.defaultProps = {
  inputBackground: 'light',
  inputType: 'PRIMARY',
};
