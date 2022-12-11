/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import COLORS from '../../assets/theme/colors';

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        height: 170,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    cardImage: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        width: 122,
        height: 170,
    },
    bodyContainer: {
        flex: 1,
        backgroundColor: COLORS.white,
        flexWrap: 'nowrap',
        flexDirection: 'column',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10,
    },
    ratingContainer: {
        flex: 0.5,
        flexWrap: 'nowrap',
        flexDirection: 'row',
        alignItems: 'center',
        borderTopRightRadius: 10,
        paddingLeft: 10,
        paddingRight: 15,
    },
    ratingAmount: {
        paddingLeft: 5,
        fontWeight: '900',
    },
    ratingCount: {
        color: COLORS.nav_grey,
        paddingLeft: 5,
    },
    detailContainer: {
        marginTop: 5,
        flex: 2,
        flexWrap: 'wrap',
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 25,
        marginBottom: 5,
    },
    cardTitle: {
        width: '100%',
        flexGrow: 1,
        flex: 1,
        paddingLeft: 5,
        fontWeight: '500',
    },
    locationContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardLocation: {
        width: '100%',
        flexGrow: 1,
        flex: 0.5,
        paddingLeft: 5,
        color: COLORS.nav_grey,
        fontSize: 14,
    },
    pricingContainer: {
        flex: 1,
        flexWrap: 'nowrap',
        flexDirection: 'row',
        borderBottomRightRadius: 10,
        paddingLeft: 10,
        paddingRight: 15,
        alignItems: 'center',
    },
    innerPricingContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    amount: {
        fontWeight: '900',
        fontSize: 18,
    },
    period: {
        color: COLORS.nav_grey,
        fontSize: 12,
        marginLeft: 5,
    },
});

export default styles;
