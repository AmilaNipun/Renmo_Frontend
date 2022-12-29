/* eslint-disable prettier/prettier */
import { StyleSheet, StatusBar } from 'react-native';
import COLORS from '../../../../assets/theme/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.reguar_white,
    },
    divider: {
        borderBottomColor: COLORS.neutral_grey,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 10,
    },
    titleContainer: {
        flex: 1,
        marginHorizontal: 15,
        justifyContent: 'center',
    },
    fullTitleContainer: {
        flex: 1,
        marginHorizontal: 15,
        justifyContent: 'center',
        width: '90%',
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
    captionText: {
        fontSize: 12,
        color: '#8F9BB3',
    },
    captionContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    mainContainerBox: {
        marginTop: -18,
    },
    containerBox: {
        backgroundColor: '#394867',
        alignSelf: 'center',
        paddingHorizontal: 22,
        paddingVertical: 8,
        borderRadius: 20,
    },
    containerBoxLabel: {
        flexShrink: 1,
        color: COLORS.sky_blue,
        fontFamily: 'SF-Pro-Display-Bold',
        fontWeight: '900',
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'flex-start',
    },
});

export default styles;
