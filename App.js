import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

//views

//========admin=============

//==========users==========
import Onboarding from './src/screen/onboarding';
import Starter from './src/screen/starter';
import Signup from './src/screen/signup';
import Login from './src/screen/login';
import ForgotPassword from './src/screen/forgot password';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Starter" component={Starter} />
            <Stack.Screen name="OnboardingScreen" component={Onboarding} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

export default App;
