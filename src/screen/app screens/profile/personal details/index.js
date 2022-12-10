/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    Layout,
    Text,
    Button,
} from '@ui-kitten/components';
import styles from './personal-details-styles';
import {
    ArrowBackIconEva,
    EmailIconEva,
    MapIconEva,
    PersonIconEva,
    PhoneIconEva,
} from '../../../../assets/theme/icons';
import * as yup from 'yup';
import { Formik } from 'formik';
import CustomInputs from '../../../../components/inputs';

const PersonalDetails = (props) => {

    const schema = yup.object({
        username: yup.string().required('Required'),
        email: yup.string().email('Invalid email').required('Required'),
        password: yup.string().min(8, 'Minimum length is 8').required('Required'),
        phone: yup.number().min(9, 'Invalid Mobile Number').required('Required'),
        location: yup.string().required('Required'),
    });

    const backToPrevious = () => {
        props.setToDefaultView();
    };

    const onSubmit = (values) => {

    };

    return (
        <>
            <Layout style={styles.formContainer}>
                <Text category="h6">
                    Personal Details
                </Text>
                <Formik
                    validationSchema={schema}
                    onSubmit={values => onSubmit(values)}
                    initialValues={{ username: '', email: '', phone: '', location: '' }}>
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
                                    label="User Name"
                                    inputType="PRIMARY"
                                    size="large"
                                    placeholder="Please Enter User Name"
                                    iconLeft={PersonIconEva}
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username}
                                    errorMessage={
                                        submitCount > 0 && errors.username ? errors.username : null
                                    }
                                    status={
                                        submitCount > 0 && errors.username ? 'danger' : 'basic'
                                    }
                                />
                            </Layout>
                            <Layout style={{ marginTop: 10 }}>
                                <CustomInputs
                                    label="Email"
                                    inputType="PRIMARY"
                                    size="large"
                                    placeholder="Please Enter Email"
                                    iconLeft={EmailIconEva}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    errorMessage={
                                        submitCount > 0 && errors.email ? errors.email : null
                                    }
                                    status={
                                        submitCount > 0 && errors.email ? 'danger' : 'basic'
                                    }
                                />
                            </Layout>
                            <Layout style={{ marginTop: 10 }}>
                                <CustomInputs
                                    label="Phone Number"
                                    inputType="PRIMARY"
                                    size="large"
                                    placeholder="Please Enter Mobile"
                                    iconLeft={PhoneIconEva}
                                    onChangeText={handleChange('phone')}
                                    onBlur={handleBlur('phone')}
                                    value={values.phone}
                                    keyboardType="phone-pad"
                                    errorMessage={
                                        submitCount > 0 && errors.phone ? errors.phone : null
                                    }
                                    status={
                                        submitCount > 0 && errors.phone ? 'danger' : 'basic'
                                    }
                                />
                            </Layout>
                            <Layout style={{ marginTop: 10 }}>
                                <CustomInputs
                                    label="Location"
                                    inputType="PRIMARY"
                                    size="large"
                                    placeholder="Please Enter Your Location"
                                    iconLeft={MapIconEva}
                                    onChangeText={handleChange('location')}
                                    onBlur={handleBlur('location')}
                                    value={values.location}
                                    errorMessage={
                                        submitCount > 0 && errors.location ? errors.location : null
                                    }
                                    status={
                                        submitCount > 0 && errors.location ? 'danger' : 'basic'
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

export default PersonalDetails;
