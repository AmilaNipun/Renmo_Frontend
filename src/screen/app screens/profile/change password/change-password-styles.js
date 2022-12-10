/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 20,
        justifyContent: 'space-between',
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
