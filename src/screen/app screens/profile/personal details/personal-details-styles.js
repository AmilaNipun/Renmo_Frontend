/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import COLORS from '../../../../assets/theme/colors';

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        backgroundColor: COLORS.reguar_white,
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 20,
        justifyContent: 'space-between',
        backgroundColor: COLORS.reguar_white,
    },
    cancelBtn: {
        flex: 1,
        borderRadius: 30,
    },
    updateBtn: {
        flex: 1,
        borderRadius: 30,
        minWidth: 100,
    },
});

export default styles;
