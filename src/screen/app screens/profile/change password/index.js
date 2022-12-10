/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Layout, Text, Button, Icon } from '@ui-kitten/components';
import styles from './change-password-styles';
import {
    AlertIconEva,
    ArrowBackIconEva,
    LockIconEva,
} from '../../../../assets/theme/icons';
import * as yup from 'yup';
import { Formik } from 'formik';
import CustomInputs from '../../../../components/inputs';
import { View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const ChangePassword = props => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [secureTextEntryConfirm, setSecureTextEntryConfirm] = useState(true);

    const schema = yup.object({
        password: yup.string().min(8, 'Minimum length is 8').required('Required'),
        repassword: yup
            .string()
            .oneOf([yup.ref('password'), null], "Password doesn't match"),
    });

    const backToPrevious = () => {
        props.setToDefaultView();
    };

    const onSubmit = values => { };

    const renderCaption = () => {
        return (
            <View style={styles.captionContainer}>
                {<AlertIconEva width={10} height={10} marginRight={5} />}
                <Text style={styles.captionText}>
                    Should contain at least 8 symbols
                </Text>
            </View>
        );
    };

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = props => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );

    const toggleSecureEntryConfirm = () => {
        setSecureTextEntryConfirm(!secureTextEntryConfirm);
    };

    const renderIconConfirm = props => (
        <TouchableWithoutFeedback onPress={toggleSecureEntryConfirm}>
            <Icon {...props} name={secureTextEntryConfirm ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );

    return (
        <>
            <Layout style={styles.formContainer}>
                <Text category="h6">
                    Change Password
                </Text>
                <Formik
                    validationSchema={schema}
                    onSubmit={values => onSubmit(values)}
                    initialValues={{ password: '', repassword: '' }}>
                    {({
                        errors,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        submitCount,
                        values,
                    }) => (
                        <>
                            <Layout style={{ marginTop: 10 }}>
                                <CustomInputs
                                    label="New Password"
                                    inputType="PRIMARY"
                                    size="large"
                                    placeholder="New Password"
                                    iconLeft={LockIconEva}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    errorMessage={
                                        submitCount > 0 && errors.password ? errors.password : null
                                    }
                                    caption={
                                        submitCount > 0 && errors.password ? null : renderCaption
                                    }
                                    iconRight={renderIcon}
                                    secureTextEntry={secureTextEntry}
                                    status={
                                        submitCount > 0 && errors.password ? 'danger' : 'basic'
                                    }
                                />
                            </Layout>
                            <Layout style={{ marginTop: 10 }}>
                                <CustomInputs
                                    label="Confirm Password"
                                    inputType="PRIMARY"
                                    size="large"
                                    placeholder="Confirm Password"
                                    iconLeft={LockIconEva}
                                    onChangeText={handleChange('repassword')}
                                    onBlur={handleBlur('repassword')}
                                    value={values.repassword}
                                    errorMessage={
                                        submitCount > 0 && errors.repassword
                                            ? errors.repassword
                                            : null
                                    }
                                    caption={
                                        submitCount > 0 && errors.repassword ? null : renderCaption
                                    }
                                    iconRight={renderIconConfirm}
                                    secureTextEntry={secureTextEntryConfirm}
                                    status={
                                        submitCount > 0 && errors.repassword ? 'danger' : 'basic'
                                    }
                                />
                            </Layout>

                            <Layout style={styles.btnContainer}>
                                <Button
                                    appearance="ghost"
                                    status="primary"
                                    size="large"
                                    style={styles.cancelBtn}
                                    accessoryLeft={ArrowBackIconEva}
                                    onPress={backToPrevious}>
                                    Cancel
                                </Button>
                                <Button
                                    appearance="filled"
                                    status="primary"
                                    size="large"
                                    style={styles.updateBtn}
                                    onPress={handleSubmit}>
                                    Update
                                </Button>
                            </Layout>
                        </>
                    )}
                </Formik>
            </Layout>
        </>
    );
};

export default ChangePassword;
