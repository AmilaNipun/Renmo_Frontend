import React, { useState } from 'react';
import styles from './reset-password-styles';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  BackIconEva,
  LockIconEva,
  AlertIconEva,
} from '../../assets/theme/icons';
import {
  Icon,
  Button,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import * as yup from 'yup';
import { Formik } from 'formik';
import CustomInputs from '../../components/inputs';
import COLORS from '../../assets/theme/colors';

const ResetPassword = ({ navigation }) => {
  const [state, setState] = useState({
    is_loading: false,
  });
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntryConfirm, setSecureTextEntryConfirm] = useState(true);

  const schema = yup.object({
    password: yup.string().min(8, 'Minimum length is 8').required('Required'),
    repassword: yup
      .string()
      .oneOf([yup.ref('password'), null], "Password doesn't match"),
  });

  const onSubmit = async values => {
    console.log(values);
    navigation.navigate('Login');
  };

  const BackAction = () => (
    <TopNavigationAction
      icon={BackIconEva}
      onPress={() => navigation.navigate('Starter')}
      style={styles.backIcon}
    />
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
    <SafeAreaView style={styles.container}>
      <TopNavigation
        accessoryLeft={BackAction}
        style={styles.topNavigationStyles}
      />
      <Layout style={styles.bodyContentContainer}>
        <ScrollView style={styles.scrollView}>
          <Layout style={styles.textContainer}>
            <Text category="h4" style={styles.app_sub_title}>
              Reset Your Password
            </Text>
            <Text category="s1" style={styles.app_sub_details}>
              Your identity has been verified!
            </Text>
            <Text category="s1" style={styles.app_sub_details}>
              Set your new password
            </Text>
          </Layout>
          <Layout style={styles.formContainer}>
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
                  <Layout style={{ marginTop: 40 }}>
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
                  <Layout style={{ marginTop: 40 }}>
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
                        submitCount > 0 && errors.repassword
                          ? null
                          : renderCaption
                      }
                      iconRight={renderIconConfirm}
                      secureTextEntry={secureTextEntryConfirm}
                      status={
                        submitCount > 0 && errors.repassword
                          ? 'danger'
                          : 'basic'
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
                      Update Password
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

export default ResetPassword;
