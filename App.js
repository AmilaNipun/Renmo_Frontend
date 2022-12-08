import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { StatusBar } from 'react-native';
import { default as theme } from './src/assets/theme/theme.json';
import { default as mapping } from './src/assets/theme/mapping.json';

//views

//========admin=============

//==========users==========
import Onboarding from './src/screen/onboarding';
import Starter from './src/screen/starter';
import Signup from './src/screen/signup';
import Login from './src/screen/login';
import ForgotPassword from './src/screen/forgot password';
import Verification from './src/screen/verification';
import ResetPassword from './src/screen/reset password';
import AppMainContainer from './src/screen/app screens/app main container';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <IconRegistry icons={[EvaIconsPack]} />
      <ApplicationProvider
        {...eva}
        theme={{ ...eva.light, ...theme }}
        customMapping={mapping}>
        <NavigationContainer>
          <StatusBar backgroundColor="#ffffff" barStyle="light-content" />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Starter" component={Starter} />
            <Stack.Screen name="OnboardingScreen" component={Onboarding} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="Verification" component={Verification} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="Main" component={AppMainContainer} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

export default App;
