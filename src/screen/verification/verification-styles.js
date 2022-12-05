import { StyleSheet } from 'react-native';
import COLORS from '../../assets/theme/colors';
import { StatusBar } from 'react-native';

const styles = StyleSheet.create({
    backIcon: {
        width: 35,
        height: 35,
        marginLeft: 0,
        padding: 0,
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    bodyContentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        marginHorizontal: 15,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    formContainer: {
        flex: 1,
        marginTop: 40,
    },
    app_sub_title: {
        textAlign: 'left',
        paddingBottom: 8,
    },
    app_sub_details: {
        color: COLORS.nav_grey,
    },
    messageContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    otp_email: {
        color: '#1A1E25',
        marginLeft: 10,
        fontWeight: '900',
    },
    primaryBtnStyle: {
        borderRadius: 30,
    },
    otpContainer: {
        marginHorizontal: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    otpBox: {
        borderRadius: 10,
        borderColor: COLORS.highlight_grey,
        borderWidth: 1,
    },
    borderFocused: {
        borderColor: COLORS.dark_blue,
        borderWidth: 1,
        borderRadius: 10,
    },
    otpText: {
        color: COLORS.dark_blue,
        padding: 0,
        textAlign: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
        lineHeight: 1,
    },
    errorMsg: {
        textAlign: 'center'
    },
});

export default styles;
