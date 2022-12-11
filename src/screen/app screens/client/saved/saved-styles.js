/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import COLORS from '../../../../assets/theme/colors';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    titleContainer: {
        flex: 1,
        marginHorizontal: 15,
    },
    divider: {
        borderBottomColor: COLORS.neutral_grey,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 10,
    },
    bodyContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingVertical: 5,
        marginHorizontal: 15,
    },
});

export default styles;
