import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

//views
import HomeScreen from '../home';
import BookedScreen from '../booked';
import SavedScreen from '../saved';
import ProfileScreen from '../profile';
import ListingScreen from '../listing';
import {
  BookIconEva,
  HeartIconEva,
  HomeIconEva,
  ListIconEva,
  PersonIconEva,
} from '../../../assets/theme/icons';
import { StatusBar } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    appearance="noIndicator"
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Home" icon={HomeIconEva} />
    <BottomNavigationTab title="Booked" icon={BookIconEva} />
    <BottomNavigationTab title="Saved" icon={HeartIconEva} />
    <BottomNavigationTab title="Profile" icon={PersonIconEva} />
  </BottomNavigation>
);

const AppMainContainer = ({ navigation }) => {
  return (
    <>
      <Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
        tabBar={props => <BottomTabBar {...props} />}>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Booked" component={BookedScreen} />
        <Screen name="Saved" component={SavedScreen} />
        <Screen name="Profile" component={ProfileScreen} />
      </Navigator>
    </>
  );
};

export default AppMainContainer;
