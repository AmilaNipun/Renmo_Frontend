/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import COLORS from '../../../assets/theme/colors';

const styles = StyleSheet.create({
    bottomNav: {
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
        backgroundColor: '#FCFCFC',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 0,
    },
});

export default styles;
