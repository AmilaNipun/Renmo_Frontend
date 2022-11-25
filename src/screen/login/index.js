import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ASSETS from '../../assets/theme/assets';
import CustomButton from '../../components/buttons';
import styles from './login-styles';
import { Button } from '@ui-kitten/components';
import { HomeIconEva } from '../../assets/theme/icons';
import { Layout, Text } from '@ui-kitten/components';

const Login = ({ navigation }) => {
  const [value, setValue] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Layout style={styles.backBtnContainer}>
        <CustomButton
          isIconBtn={true}
          icon={ASSETS.left_arrow}
          onPress={() => navigation.navigate('Starter')}
        />
      </Layout>
      <Layout style={styles.bodyContentContainer}>
        <Layout style={styles.textContainer}>
          <Text style={styles.app_sub_title}>Welcome Back!</Text>
          <Text style={styles.app_sub_details}>
            Log In to your Renmo account to explore renting around Australia!
          </Text>
        </Layout>
        <Layout style={styles.formContainer}>
          <Button accessoryLeft={HomeIconEva}>Login with Facebook</Button>
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};

export default Login;
