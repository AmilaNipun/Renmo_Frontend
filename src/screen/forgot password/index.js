import React, { useState } from 'react';
import styles from './forgot-password-styles';
import { SafeAreaView, ScrollView } from 'react-native';
import { EmailIconEva, BackIconEva } from '../../assets/theme/icons';
import {
  Button,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import * as yup from 'yup';
import { Formik } from 'formik';
import CustomInputs from '../../components/inputs';

const ForgotPassword = ({ navigation }) => {
  const [state, setState] = useState({
    is_loading: false,
  });

  const schema = yup.object({
    email: yup.string().email('Invalid email').required('Required'),
  });

  const onSubmit = async values => {
    console.log(values);
    navigation.push('Verification');
  };

  const BackAction = () => (
    <TopNavigationAction
      icon={BackIconEva}
      onPress={() => navigation.goBack()}
      style={styles.backIcon}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Layout>
        <TopNavigation accessoryLeft={BackAction} />
      </Layout>
      <Layout style={styles.bodyContentContainer}>
        <ScrollView style={styles.scrollView}>
          <Layout style={styles.textContainer}>
            <Text category="h4" style={styles.app_sub_title}>
              Forgot Your Password?
            </Text>
            <Text category="s1" style={styles.app_sub_details}>
              Enter your registered email below to receive password rest
              instructions
            </Text>
          </Layout>
          <Layout style={styles.formContainer}>
            <Formik
              // validationSchema={schema}
              onSubmit={values => onSubmit(values)}
              initialValues={{ email: '' }}>
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
                  <Layout style={{ marginTop: 15 }}>
                    <Button
                      appearance="filled"
                      status="primary"
                      size="large"
                      style={styles.primaryBtnStyle}
                      onPress={handleSubmit}>
                      Reset Password
                    </Button>
                  </Layout>
                </>
              )}
            </Formik>
          </Layout>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};

export default ForgotPassword;
