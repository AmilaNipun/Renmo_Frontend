/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
} from 'react-native';
import {
    Avatar,
    Layout,
    Text,
    DrawerItem,
    DrawerGroup,
} from '@ui-kitten/components';
import styles from './profile-styles';
import ASSETS from '../../../assets/theme/assets';
import {
    CardIconFillEva,
    FileTextIconFillEva,
    IosForwardIconEva,
    LockIconFillEva,
    PersonIconFillEva,
    QuestionCircleIconFillEva,
    SettingsIconFillEva,
    ToggleLeftIconFillEva,
} from '../../../assets/theme/icons';
import PersonalDetails from './personal details';
import ChangePassword from './change password';

const ProfileScreen = ({ navigation }) => {
    const [viewScreen, setViewScreen] = useState(0);
    const [activeDrawer, setActiveDrawer] = useState(1);
    const [userRole, setuserRole] = useState(0);

    const changeUserType = () => { };

    const setToDefaultView = () => {
        setViewScreen(0);
    };

    return (
        <>
            <SafeAreaView style={styles.mainContainer}>
                <ScrollView style={styles.scrollView}>
                    <Layout style={styles.heroContainer}>
                        <Avatar
                            style={styles.avatar}
                            size="giant"
                            shape="round"
                            source={ASSETS.avatar}
                        />
                        <Text style={styles.avatarName} category="h4">
                            User Name
                        </Text>
                        <Text style={styles.avatarEmail} category="s1">
                            lucybond08@gmail.com
                        </Text>
                    </Layout>
                    <View style={styles.divider} />
                    {viewScreen === 0 ? (
                        <>
                            <Layout style={styles.bodyContainer}>
                                <DrawerItem
                                    title={activeDrawer === 1 ? () => <Text category="s1" style={styles.selectedTitle}>Personal Details</Text> : () => <Text category="s1" style={styles.selectedTitle}>Personal Details</Text>}
                                    accessoryLeft={activeDrawer === 1 ? <PersonIconFillEva fill="#1a2650" /> : PersonIconFillEva}
                                    accessoryRight={activeDrawer === 1 ? <IosForwardIconEva fill="#1a2650" /> : IosForwardIconEva}
                                    style={activeDrawer === 1 ? styles.selectedDrawerItem : styles.drawerItem}
                                    onPress={() => { setViewScreen(1); setActiveDrawer(1); }}
                                />
                                <DrawerGroup
                                    title={(activeDrawer === 2 || activeDrawer === 3) ? () => <Text category="s1" style={styles.selectedTitle}>Settings</Text> : () => <Text category="s1" style={styles.selectedTitle}>Settings</Text>}
                                    accessoryLeft={(activeDrawer === 2 || activeDrawer === 3) ? <SettingsIconFillEva fill="#1a2650" /> : SettingsIconFillEva}
                                    accessoryRight={(activeDrawer === 2 || activeDrawer === 3) ? <IosForwardIconEva fill="#1a2650" /> : IosForwardIconEva}
                                    style={(activeDrawer === 2 || activeDrawer === 3) ? styles.selectedDrawerItem : styles.drawerItem}
                                    onPress={() => setActiveDrawer(2)}>
                                    <DrawerItem
                                        title={activeDrawer === 3 ? () => <Text category="s1" style={styles.selectedTitle}>Change Password</Text> : () => <Text category="s1" style={styles.selectedTitle}>Change Password</Text>}
                                        accessoryLeft={activeDrawer === 3 ? <LockIconFillEva fill="#1a2650" /> : LockIconFillEva}
                                        accessoryRight={activeDrawer === 3 ? <IosForwardIconEva fill="#1a2650" /> : IosForwardIconEva}
                                        style={activeDrawer === 3 ? styles.selectedDrawerItem : styles.drawerItem}
                                        onPress={() => { setViewScreen(2); setActiveDrawer(3); }}
                                    />
                                </DrawerGroup>
                                <DrawerItem
                                    title={activeDrawer === 4 ? () => <Text category="s1" style={styles.selectedTitle}>Payment Details</Text> : () => <Text category="s1" style={styles.selectedTitle}>Payment Details</Text>}
                                    accessoryLeft={activeDrawer === 4 ? <CardIconFillEva fill="#1a2650" /> : CardIconFillEva}
                                    accessoryRight={activeDrawer === 4 ? <IosForwardIconEva fill="#1a2650" /> : IosForwardIconEva}
                                    style={activeDrawer === 4 ? styles.selectedDrawerItem : styles.drawerItem}
                                    onPress={() => { setActiveDrawer(4); }}
                                />
                                <DrawerItem
                                    title={activeDrawer === 5 ? () => <Text category="s1" style={styles.selectedTitle}>FAQ</Text> : () => <Text category="s1" style={styles.selectedTitle}>FAQ</Text>}
                                    accessoryLeft={activeDrawer === 5 ? <QuestionCircleIconFillEva fill="#1a2650" /> : QuestionCircleIconFillEva}
                                    accessoryRight={activeDrawer === 5 ? <IosForwardIconEva fill="#1a2650" /> : IosForwardIconEva}
                                    style={activeDrawer === 5 ? styles.selectedDrawerItem : styles.drawerItem}
                                    onPress={() => { setActiveDrawer(5); }}
                                />
                                {userRole === 1 &&
                                    <DrawerGroup
                                        title={(activeDrawer === 6 || activeDrawer === 7) ? () => <Text category="s1" style={styles.selectedTitle}>Reports</Text> : () => <Text category="s1" style={styles.selectedTitle}>Reports</Text>}
                                        accessoryLeft={(activeDrawer === 6 || activeDrawer === 7) ? <FileTextIconFillEva fill="#1a2650" /> : FileTextIconFillEva}
                                        accessoryRight={(activeDrawer === 6 || activeDrawer === 7) ? <IosForwardIconEva fill="#1a2650" /> : IosForwardIconEva}
                                        style={(activeDrawer === 6 || activeDrawer === 7) ? styles.selectedDrawerItem : styles.drawerItem}
                                        onPress={() => setActiveDrawer(6)}>
                                        <DrawerItem
                                            title={activeDrawer === 7 ? () => <Text category="s1" style={styles.selectedTitle}>Income Report</Text> : () => <Text category="s1" style={styles.selectedTitle}>Income Report</Text>}
                                            accessoryLeft={activeDrawer === 7 ? <FileTextIconFillEva fill="#1a2650" /> : FileTextIconFillEva}
                                            accessoryRight={activeDrawer === 7 ? <IosForwardIconEva fill="#1a2650" /> : IosForwardIconEva}
                                            style={activeDrawer === 7 ? styles.selectedDrawerItem : styles.drawerItem}
                                            onPress={() => { setViewScreen(6); setActiveDrawer(7); }}
                                        />
                                    </DrawerGroup>
                                }
                            </Layout>
                            <View style={styles.divider} />
                            <Layout style={styles.bodyContainer}>
                                <DrawerItem
                                    title={() => <Text category="s1" style={styles.selectedTitle}>Switch To Hosting</Text>}
                                    accessoryLeft={ToggleLeftIconFillEva}
                                    accessoryRight={IosForwardIconEva}
                                    style={styles.drawerItem}
                                />
                            </Layout>
                        </>
                    ) : viewScreen === 1 ? (
                        <>
                            <Layout style={styles.bodyContainer}>
                                <PersonalDetails setToDefaultView={setToDefaultView} />
                            </Layout>
                        </>
                    ) : viewScreen === 2 ? (
                        <>
                            <Layout style={styles.bodyContainer}>
                                <ChangePassword setToDefaultView={setToDefaultView} />
                            </Layout>
                        </>
                    ) : viewScreen === 3 ? (
                        <></>
                    ) : viewScreen === 4 ? (
                        <></>
                    ) : null}
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default ProfileScreen;
