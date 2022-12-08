import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';
import {
    Avatar,
    Button,
    Icon,
    Layout,
    Text,
    TopNavigation,
    TopNavigationAction,
    Divider,
    Drawer,
    DrawerItem,
} from '@ui-kitten/components';
import styles from './profile-styles';
import ASSETS from '../../../assets/theme/assets';
import {
    CardIconFillEva,
    IosForwardIconEva,
    PersonIconFillEva,
    QuestionCircleIconFillEva,
    ToggleLeftIconFillEva,
} from '../../../assets/theme/icons';

const ProfileScreen = ({ navigation }) => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [userType, setUserType] = useState(null);

    const changeUserType = () => { };

    return (
        <>
            <SafeAreaView style={styles.container}>
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
                    <Layout style={styles.settingsContainer}>
                        <Drawer
                            selectedIndex={selectedIndex}
                            onSelect={index => setSelectedIndex(index)}>
                            <DrawerItem
                                title="Personal details"
                                accessoryLeft={PersonIconFillEva}
                                accessoryRight={IosForwardIconEva}
                                style={styles.drawerItem}
                            />
                            <DrawerItem
                                title="Payment details"
                                accessoryLeft={CardIconFillEva}
                                accessoryRight={IosForwardIconEva}
                                style={styles.drawerItem}
                            />
                            <DrawerItem
                                title="FAQ"
                                accessoryLeft={QuestionCircleIconFillEva}
                                accessoryRight={IosForwardIconEva}
                                style={styles.drawerItem}
                            />
                        </Drawer>
                    </Layout>
                    <View style={styles.divider} />
                    <Layout style={styles.switchContainer}>
                        <Drawer
                            onSelect={() => changeUserType()}>
                            <DrawerItem
                                title="Switch to hosting"
                                accessoryLeft={ToggleLeftIconFillEva}
                                accessoryRight={IosForwardIconEva}
                            />
                        </Drawer>
                    </Layout>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default ProfileScreen;
