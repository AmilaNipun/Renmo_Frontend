import React from 'react';
import { View } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import RNPickerSelect from 'react-native-picker-select';
import styles from './select-styles';
import COLORS from '../../assets/theme/colors';

const CustomSelect = props => {
  return (
    <>
      <Layout
        style={
          props.selectMainBackground === 'light'
            ? styles.lightBackground
            : styles.thickBackground
        }>
        <Text style={styles.label} category="label">
          {props.label}
        </Text>
        <View style={styles.selectBackground}>
          <RNPickerSelect
            onValueChange={props.onValueChange}
            items={props.items}
            placeholder={props.placeholder}
            disabled={props.disabled}
            value={props.value}
            itemKey={props.itemKey}
            style={{
              inputIOS: {
                borderRadius: 30,
                borderWidth: 1,
                borderColor: COLORS.highlight_grey,
                color: COLORS.dark_blue,
                paddingLeft: 20,
              },
              inputAndroid: {
                paddingVertical: 8,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: COLORS.highlight_grey,
                color: COLORS.dark_blue,
                paddingLeft: 20,
              },
            }}
            pickerProps={props.pickerProps}
            Icon={props.Icon}
            textInputProps={props.textInputProps}
            touchableWrapperProps={props.touchableWrapperProps}
            onOpen={props.onOpen}
            useNativeAndroidPickerStyle={props.useNativeAndroidPickerStyle}
          />
          {props.errorMessage && (
            <Text style={styles.errorMsg}>{props.errorMessage}</Text>
          )}
        </View>
      </Layout>
    </>
  );
};

export default CustomSelect;

// Set default props
CustomSelect.defaultProps = {
  selectMainBackground: 'light',
  items: [],
};
