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
    },
    app_sub_title: {
        textAlign: 'left',
        paddingBottom: 8,
    },
    app_sub_details: {
        color: COLORS.nav_grey,
        textAlign: 'left',
    },
    primaryBtnStyle: {
        borderRadius: 30,
    },
    captionContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    captionText: {
        fontSize: 12,
        color: '#8F9BB3',
    },
});

export default styles;
