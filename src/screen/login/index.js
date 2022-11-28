/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import ASSETS from '../../assets/theme/assets';
import CustomButton from '../../components/buttons';
import styles from './login-styles';
import {
  EmailIconEva,
  BackIconEva,
  LockIconEva,
  AlertIconEva,
} from '../../assets/theme/icons';
import {
  Button,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Divider,
} from '@ui-kitten/components';
import { ArrowLeft2 } from 'iconsax-react-native';
import * as yup from 'yup';
import { Formik } from 'formik';
import CustomInputs from '../../components/inputs';

const Login = ({ navigation }) => {
  const [state, setState] = useState({
    is_loading: false,
  });
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const schema = yup.object({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().min(8, 'Minimum length is 8').required('Required'),
  });

  const onSubmit = async values => {
    console.log(values);
  };

  const BackAction = () => (
    <TopNavigationAction
      icon={BackIconEva}
      // icon={<ArrowLeft2 size="30" color="#1A1E25" variant="Outline" />}
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

  return (
    <SafeAreaView style={styles.container}>
      <Layout>
        <TopNavigation accessoryLeft={BackAction} />
      </Layout>
      <Layout style={styles.bodyContentContainer}>
        <ScrollView style={styles.scrollView}>
          <Layout style={styles.textContainer}>
            <Text category="h4" style={styles.app_sub_title}>
              Welcome Back!
            </Text>
            <Text category="s1" style={styles.app_sub_details}>
              Log In to your Renmo account to explore renting around Australia!
            </Text>
          </Layout>
          <Layout style={styles.formContainer}>
            <Formik
              validationSchema={schema}
              onSubmit={values => onSubmit(values)}
              initialValues={{ email: '', password: '' }}>
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
                      label="Password"
                      inputType="PRIMARY"
                      size="large"
                      iconLeft={LockIconEva}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      errorMessage={
                        submitCount > 0 && errors.password
                          ? errors.password
                          : null
                      }
                      caption={
                        submitCount > 0 && errors.password
                          ? null
                          : renderCaption
                      }
                      iconRight={renderIcon}
                      secureTextEntry={secureTextEntry}
                      status={
                        submitCount > 0 && errors.password ? 'danger' : 'basic'
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
                      Log in
                    </Button>
                  </Layout>

                  <TouchableOpacity
                    onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text category="label" style={styles.linkLabel}>
                      Forgot password?
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </Formik>
            <Layout style={{ marginTop: 35 }}>
              <Divider style={styles.divider} />
              <View style={styles.mainContainerBox}>
                <View style={styles.containerBox}>
                  <Text style={styles.containerBoxLabel}>OR</Text>
                </View>
              </View>
            </Layout>
            <Layout style={styles.buttonContainer}>
              <Layout>
                <CustomButton
                  btnType="DARK"
                  btnLabel="Sign in with Apple"
                  frontIcon={ASSETS.apple}
                // onPress={() => navigation.navigate('Signup')}
                />
              </Layout>
              <Layout style={{ marginTop: 8, marginBottom: 8 }}>
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

export default Login;
