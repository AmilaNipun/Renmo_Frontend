import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import CustomButton from '../../components/buttons';
import ASSETS from '../../assets/const/assets';
import styles from './starter-styles';

const Starter = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.app_header}>RENMO</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.starterImageContainer}>
          <Image
            source={ASSETS.starter_background}
            style={styles.starterImage}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.app_sub_title}>Renting Makes Easy!</Text>
          <Text style={styles.app_sub_details}>
            Are you looking for rent House, Room, Vehicle or Tools? Renmo will
            help you on your journey!
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            btnType="PRIMARY"
            btnLabel="Log in"
            onPress={() => navigation.navigate('Login')}
          />

          <View style={{marginTop: 10}}>
            <CustomButton
              btnType="SECONDARY"
              btnLabel="Sign up"
              onPress={() => navigation.navigate('Signup')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Starter;
