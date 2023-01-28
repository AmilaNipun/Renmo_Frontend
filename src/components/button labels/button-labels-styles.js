/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import COLORS from '../../assets/theme/colors';

const styles = StyleSheet.create({
    lightBackground: {
        backgroundColor: COLORS.reguar_white,
    },
    thickBackground: {
        backgroundColor: COLORS.white,
    },
    label: {
        marginBottom: 4,
        color: COLORS.nav_grey,
    },
    item: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginRight: 10,
        borderWidth: 1,
        borderColor: COLORS.highlight_grey,
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
    },
    selectBackground: {
        backgroundColor: '#fafafc',
        borderWidth: 2,
        borderColor: COLORS.highlight_grey,
        borderRadius: 30,
        height: 50,
        justifyContent: 'center',
    },
    selectPrimary: {
        borderRadius: 30,
        borderWidth: 2,
        borderColor: COLORS.highlight_grey,
        color: COLORS.dark_blue,
    },
    errorMsg: {
        fontSize: 12,
        marginLeft: 15,
        marginTop: 5,
        color: '#9E1212',
    },
});

export default styles;
