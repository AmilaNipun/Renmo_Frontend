import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import {
  BookIconEva,
  HeartIconEva,
  HomeIconEva,
  ListIconEva,
  PersonDoneOutlineIconEva,
  PersonIconEva,
  PlusCircleOutlineIconEva,
} from '../../../assets/theme/icons';
import styles from './app-main-container-styles';

//views
import HomeScreen from '../client/home';
import BookedScreen from '../client/booked';
import SavedScreen from '../client/saved';
import ProfileScreen from '../profile';
import BookingsScreen from '../admin/bookings';
import ItemsSummaryScreen from '../admin/Items summary';
import ReviewScreen from '../admin/review license & id';

const { Navigator, Screen } = createBottomTabNavigator();

const ClientBottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    appearance="noIndicator"
    selectedIndex={state.index}
    style={styles.bottomNav}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Home" icon={HomeIconEva} />
    <BottomNavigationTab title="Booked" icon={BookIconEva} />
    <BottomNavigationTab title="Saved" icon={HeartIconEva} />
    <BottomNavigationTab title="Profile" icon={PersonIconEva} />
  </BottomNavigation>
);

const AdminBottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    appearance="noIndicator"
    selectedIndex={state.index}
    style={styles.bottomNav}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Listed" icon={ListIconEva} />
    <BottomNavigationTab title="Bookings" icon={BookIconEva} />
    <BottomNavigationTab title="Review" icon={PersonDoneOutlineIconEva} />
    <BottomNavigationTab title="Profile" icon={PersonIconEva} />
  </BottomNavigation>
);

const AppMainContainer = () => {
  const [userRole, setuserRole] = useState(1);
  return (
    <>
      {userRole === 0 ? (
        <>
          <Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
            tabBar={props => (
              <ClientBottomTabBar userRole={userRole} {...props} />
            )}>
            <Screen name="Home" component={HomeScreen} />
            <Screen name="Booked" component={BookedScreen} />
            <Screen name="Saved" component={SavedScreen} />
            <Screen name="Profile" component={ProfileScreen} />
          </Navigator>
        </>
      ) : (
        userRole === 1 && (
          <>
            <Navigator
              initialRouteName="Listed"
              screenOptions={{ headerShown: false }}
              tabBar={props => (
                <AdminBottomTabBar userRole={userRole} {...props} />
              )}>
              <Screen name="Listed" component={ItemsSummaryScreen} />
              <Screen name="Bookings" component={BookingsScreen} />
              <Screen name="Review" component={ReviewScreen} />
              <Screen name="Profile" component={ProfileScreen} />
            </Navigator>
          </>
        )
      )}
    </>
  );
};

export default AppMainContainer;
