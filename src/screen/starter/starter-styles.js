import { StyleSheet } from 'react-native';
import COLORS from '../../assets/theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  app_header: {
    fontWeight: '900',
    color: COLORS.dark_blue,
    textAlign: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  detailsContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 9,
    paddingRight: 9,
  },
  starterImageContainer: {
    flex: 2.5,
    justifyContent: 'center',
    alignContent: 'center',
  },
  starterImage: {
    flex: 1,
    width: '100%',
  },
  textContainer: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
  },
  app_sub_title: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontWeight: '700',
    fontSize: 24,
    color: COLORS.light_blue,
    textAlign: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  app_sub_details: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: COLORS.nav_grey,
    textAlign: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
});

export default styles;
