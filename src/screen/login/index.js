import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, TextInput} from 'react-native';
import ASSETS from '../../assets/const/assets';
import CustomButton from '../../components/buttons';
import CustomInputs from '../../components/inputs';
import styles from './login-styles';
import {Input} from '@ui-kitten/components';

const Login = ({navigation}) => {
  const [value, setValue] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backBtnContainer}>
        <CustomButton
          isIconBtn={true}
          icon={ASSETS.left_arrow}
          onPress={() => navigation.navigate('Starter')}
        />
      </View>
      <View style={styles.bodyContentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.app_sub_title}>Welcome Back!</Text>
          <Text style={styles.app_sub_details}>
            Log In to your Renmo account to explore renting around Australia!
          </Text>
        </View>
        <View style={styles.formContainer} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
