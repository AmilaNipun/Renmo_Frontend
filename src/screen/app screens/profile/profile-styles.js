import { StyleSheet } from 'react-native';
import COLORS from '../../../assets/theme/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    scrollView: {
        marginHorizontal: 15,
    },
    heroContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingHorizontal: 20,
        paddingVertical: 25,
    },
    avatar: {
        width: 80,
        height: 80
    },
    avatarName: {
        marginTop: 20,
        color: COLORS.dark_blue,
    },
    avatarEmail: {
        marginTop: 2,
        color: COLORS.nav_grey,
        textAlign: 'center',
    },
    divider: {
        borderBottomColor: COLORS.neutral_grey,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 10,
    },
    settingsContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingVertical: 25,
    },
    drawerItem: {
        marginVertical: 5,
        fontSize: 15,
        fontWeight: '900',
    },
    switchContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingVertical: 25,
    },
});

export default styles;
