/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView, Image, View } from 'react-native';
import { Layout, Text, TopNavigation } from '@ui-kitten/components';
import CustomButton from '../../components/buttons';
import ASSETS from '../../assets/theme/assets';
import styles from './starter-styles';
import { Button } from '@ui-kitten/components';

const Starter = ({ navigation }) => {
  const renderTitle = props => (
    <View style={styles.titleContainer}>
      <Image style={styles.logo} source={ASSETS.app_logo} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Layout>
        <TopNavigation alignment="center" title={renderTitle} />
      </Layout>
      <Layout style={styles.detailsContainer}>
        <Layout style={styles.starterImageContainer}>
          <Image
            source={ASSETS.starter_background}
            style={styles.starterImage}
          />
        </Layout>
        <Layout style={styles.textContainer}>
          <Text category="h4" style={styles.app_sub_title}>
            Renting Makes Easy!
          </Text>
          <Text category="s1" style={styles.app_sub_details}>
            Are you looking for rent House, Room, Vehicle or Tools? Renmo will
            help you on your journey!
          </Text>
        </Layout>
        <Layout style={styles.buttonContainer}>
          <Layout>
            <Button
              appearance="filled"
              status="primary"
              size="large"
              style={styles.primaryBtnStyle}
              onPress={() => navigation.navigate('Login')}>
              Log in
            </Button>
          </Layout>
          <Layout style={{ marginTop: 8, marginBottom: 8 }}>
            <CustomButton
              btnType="LIGHT"
              btnLabel="Sign up"
              onPress={() => navigation.navigate('Signup')}
            />
          </Layout>
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};

export default Starter;
