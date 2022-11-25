import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import CustomButton from '../../components/buttons';
import ASSETS from '../../assets/theme/assets';
import styles from './starter-styles';
import { Button } from '@ui-kitten/components';

const Starter = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.app_header} category="h1">
        RENMO
      </Text>
      <Layout style={styles.detailsContainer}>
        <Layout style={styles.starterImageContainer}>
          <Image
            source={ASSETS.starter_background}
            style={styles.starterImage}
          />
        </Layout>
        <Layout style={styles.textContainer}>
          <Text style={styles.app_sub_title}>Renting Makes Easy!</Text>
          <Text style={styles.app_sub_details}>
            Are you looking for rent House, Room, Vehicle or Tools? Renmo will
            help you on your journey!
          </Text>
        </Layout>
        <Layout style={styles.buttonContainer}>
          <CustomButton
            btnType="PRIMARY"
            btnLabel="Log in"
            onPress={() => navigation.navigate('Login')}
          />

          <Layout style={{ marginTop: 10 }}>
            <CustomButton
              btnType="SECONDARY"
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
