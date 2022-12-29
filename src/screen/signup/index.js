/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  Button,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Divider,
} from '@ui-kitten/components';
import styles from './signup-styles';
import * as yup from 'yup';
import { Formik } from 'formik';
import {
  BackIconEva,
  EmailIconEva,
  LockIconEva,
  PhoneIconEva,
} from '../../assets/theme/icons';
import CustomInputs from '../../components/inputs';
import CustomButton from '../../components/buttons';
import ASSETS from '../../assets/theme/assets';
import COLORS from '../../assets/theme/colors';

const Signup = ({ navigation }) => {
  const [state, setState] = useState({
    is_loading: false,
  });
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const schema = yup.object({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().min(8, 'Minimum length is 8').required('Required'),
    phone: yup.number().min(9, 'Invalid Mobile Number').required('Required'),
  });

  const onSubmit = async values => {
    console.log(values);
  };

  const BackAction = () => (
    <TopNavigationAction
      icon={BackIconEva}
      onPress={() => navigation.navigate('Starter')}
      style={styles.backIcon}
    />
  );

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation
        accessoryLeft={BackAction}
        style={styles.topNavigationStyles}
      />
      <Layout style={styles.bodyContentContainer}>
        <ScrollView style={styles.scrollView}>
          <Layout style={styles.textContainer}>
            <Text category="h4" style={styles.app_sub_title}>
              Let’s Explore Together!
            </Text>
            <Text category="s1" style={styles.app_sub_details}>
              Create your Renmo account to explore renting around Australia!
            </Text>
          </Layout>
          <Layout style={styles.formContainer}>
            <Formik
              validationSchema={schema}
              onSubmit={values => onSubmit(values)}
              initialValues={{ email: '', password: '', phone: '' }}>
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
                  <Layout
                    style={{
                      marginTop: 10,
                      backgroundColor: COLORS.reguar_white,
                    }}>
                    <CustomInputs
                      label="Password"
                      inputType="PRIMARY"
                      size="large"
                      placeholder="Please Enter Password"
                      iconLeft={LockIconEva}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      errorMessage={
                        submitCount > 0 && errors.password
                          ? errors.password
                          : null
                      }
                      iconRight={renderIcon}
                      secureTextEntry={secureTextEntry}
                      status={
                        submitCount > 0 && errors.password ? 'danger' : 'basic'
                      }
                    />
                  </Layout>

                  <Layout
                    style={{
                      marginTop: 10,
                      backgroundColor: COLORS.reguar_white,
                    }}>
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

                  <Layout
                    style={{
                      marginTop: 15,
                      backgroundColor: COLORS.reguar_white,
                    }}>
                    <Button
                      appearance="filled"
                      status="primary"
                      size="large"
                      style={styles.primaryBtnStyle}
                      onPress={handleSubmit}>
                      Create account
                    </Button>
                  </Layout>
                </>
              )}
            </Formik>
            <Layout
              style={{ marginTop: 35, backgroundColor: COLORS.reguar_white }}>
              <Divider style={styles.divider} />
              <View style={styles.mainContainerBox}>
                <View style={styles.containerBox}>
                  <Text style={styles.containerBoxLabel}>OR</Text>
                </View>
              </View>
            </Layout>
            <Layout style={styles.buttonContainer}>
              <Layout
                style={{
                  backgroundColor: COLORS.reguar_white,
                }}>
                <CustomButton
                  btnType="DARK"
                  btnLabel="Sign in with Apple"
                  frontIcon={ASSETS.apple}
                // onPress={() => navigation.navigate('Signup')}
                />
              </Layout>
              <Layout
                style={{
                  marginTop: 8,
                  marginBottom: 8,
                  backgroundColor: COLORS.reguar_white,
                }}>
                <CustomButton
                  btnType="LIGHT"
                  btnLabel="Sign in with Google"
                  frontIcon={ASSETS.google}
                // onPress={() => navigation.navigate('Signup')}
                />
              </Layout>
            </Layout>
          </Layout>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};

export default Signup;
