/* eslint-disable prettier/prettier */
import React from 'react';
import { Layout, Text, Input } from '@ui-kitten/components';
import styles from './text-editor-styles';

const CustomTextEditor = props => {
    return (
        <>
            <Layout
                style={
                    props.inputBackground === 'light'
                        ? styles.lightBackground
                        : styles.thickBackground
                }>
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
                    maxLength={props.maxLength}
                    ref={props.ref}
                    style={
                        props.inputType === 'PRIMARY'
                            ? styles.textInputPrimary
                            : props.inputType === 'SECONDARY'
                                ? styles.textInputSecondary
                                : null
                    }
                />

                {props.errorMessage && (
                    <Text style={styles.errorMsg} status="danger">
                        {props.errorMessage}
                    </Text>
                )}
            </Layout>
        </>
    );
};

export default CustomTextEditor;

// Set default props
CustomTextEditor.defaultProps = {
    inputBackground: 'light',
    inputType: 'PRIMARY',
};
