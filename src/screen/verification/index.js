/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef } from 'react';
import styles from './verification-styles';
import { SafeAreaView, ScrollView, View, TextInput } from 'react-native';
import { BackIconEva } from '../../assets/theme/icons';
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
import COLORS from '../../assets/theme/colors';

const Verification = ({ navigation, props }) => {
  //states
  const [state, setState] = useState({
    is_loading: false,
  });
  const [focusState, setfocusState] = useState({
    isFocused: false,
    ref: null,
  });
  const [isValid, setValidity] = useState(true);
  const [otp, setOtp] = useState({ 1: null, 2: null, 3: null, 4: null });

  //reference
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();

  const onSubmit = async => {
    if (
      otp[1] == null ||
      otp[1] == '' ||
      otp[2] == null ||
      otp[2] == '' ||
      otp[3] == null ||
      otp[3] == '' ||
      otp[4] == null ||
      otp[4] == ''
    ) {
      setValidity(false);
      return;
    } else {
      setValidity(true);
    }
    console.log(otp);
    navigation.push('ResetPassword');
  };

  const BackAction = () => (
    <TopNavigationAction
      icon={BackIconEva}
      onPress={() => navigation.goBack()}
      style={styles.backIcon}
    />
  );

  const handleFocus = ref => {
    setfocusState({ isFocused: true, ref: ref });
    setValidity(true);
  };

  const handleBlur = ref => setfocusState({ isFocused: false, ref: ref });

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
              Code Verification
            </Text>
            <Layout style={styles.messageContainer}>
              <Text style={styles.app_sub_details}>
                Enter one time password sent to
              </Text>
              <Text style={styles.otp_email}>Enter on</Text>
            </Layout>
          </Layout>
          <Layout style={styles.formContainer}>
            <Layout style={styles.otpContainer}>
              <View
                style={
                  focusState.isFocused && focusState.ref == firstInput
                    ? styles.borderFocused
                    : styles.otpBox
                }>
                <TextInput
                  style={styles.otpText}
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={firstInput}
                  onChangeText={text => {
                    setOtp({ ...otp, 1: text });
                    text && secondInput.current.focus();
                  }}
                  onFocus={() => handleFocus(firstInput)}
                  onBlur={() => handleBlur(firstInput)}
                />
              </View>
              <View
                style={
                  focusState.isFocused && focusState.ref == secondInput
                    ? styles.borderFocused
                    : styles.otpBox
                }>
                <TextInput
                  style={styles.otpText}
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={secondInput}
                  onChangeText={text => {
                    setOtp({ ...otp, 2: text });
                    text
                      ? thirdInput.current.focus()
                      : firstInput.current.focus();
                  }}
                  onFocus={() => handleFocus(secondInput)}
                  onBlur={() => handleBlur(secondInput)}
                />
              </View>
              <View
                style={
                  focusState.isFocused && focusState.ref == thirdInput
                    ? styles.borderFocused
                    : styles.otpBox
                }>
                <TextInput
                  style={styles.otpText}
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={thirdInput}
                  onChangeText={text => {
                    setOtp({ ...otp, 3: text });
                    text
                      ? fourthInput.current.focus()
                      : secondInput.current.focus();
                  }}
                  onFocus={() => handleFocus(thirdInput)}
                  onBlur={() => handleBlur(thirdInput)}
                />
              </View>
              <View
                style={
                  focusState.isFocused && focusState.ref == fourthInput
                    ? styles.borderFocused
                    : styles.otpBox
                }>
                <TextInput
                  style={styles.otpText}
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={fourthInput}
                  onChangeText={text => {
                    setOtp({ ...otp, 4: text });
                    !text && thirdInput.current.focus();
                  }}
                  onFocus={() => handleFocus(fourthInput)}
                  onBlur={() => handleBlur(fourthInput)}
                />
              </View>
            </Layout>
            <Layout
              style={{ marginTop: 25, backgroundColor: COLORS.reguar_white }}>
              {!isValid && (
                <Text style={styles.errorMsg} status="danger">
                  Invalid OTP
                </Text>
              )}
            </Layout>
            <Layout
              style={{ marginTop: 25, backgroundColor: COLORS.reguar_white }}>
              <Button
                appearance="filled"
                status="primary"
                size="large"
                style={styles.primaryBtnStyle}
                onPress={onSubmit}>
                Verify Code
              </Button>
            </Layout>
          </Layout>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};

export default Verification;
