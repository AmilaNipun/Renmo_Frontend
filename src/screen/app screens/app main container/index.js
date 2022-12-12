import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

//views
import HomeScreen from '../client/home';
import BookedScreen from '../client/booked';
import SavedScreen from '../client/saved';
import ProfileScreen from '../profile';
import {
  BookIconEva,
  HeartIconEva,
  HomeIconEva,
  PersonIconEva,
} from '../../../assets/theme/icons';
import styles from './app-main-container-styles';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ userRole, navigation, state }) => (
  <BottomNavigation
    appearance="noIndicator"
    selectedIndex={state.index}
    style={styles.bottomNav}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    {userRole === 0 ? (
      <>
        <BottomNavigationTab title="Home" icon={HomeIconEva} />
        <BottomNavigationTab title="Booked" icon={BookIconEva} />
        <BottomNavigationTab title="Saved" icon={HeartIconEva} />
        <BottomNavigationTab title="Profile" icon={PersonIconEva} />
      </>
    ) : (
      userRole === 1 && <></>
    )}
  </BottomNavigation>
);

const AppMainContainer = () => {
  const [userRole, setuserRole] = useState(0);
  return (
    <>
      <Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
        tabBar={props => <BottomTabBar userRole={userRole} {...props} />}>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Booked" component={BookedScreen} />
        <Screen name="Saved" component={SavedScreen} />
        <Screen name="Profile" component={ProfileScreen} />
      </Navigator>
    </>
  );
};

export default AppMainContainer;
