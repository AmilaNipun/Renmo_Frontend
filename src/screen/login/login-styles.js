import { StyleSheet } from 'react-native';
import COLORS from '../../assets/theme/colors';

const styles = StyleSheet.create({
  //containers
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  backBtnContainer: {
    flex: 1,
    paddingLeft: 9,
    paddingRight: 9,
    justifyContent: 'center',
    alignContent: 'center'
  },
  bodyContentContainer: {
    flex: 1,
    paddingLeft: 9,
    paddingRight: 9,
    justifyContent: 'center',
    alignContent: 'center'
  },
  textContainer: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  formContainer: {
    flex: 1
    // backgroundColor: 'lightblue',
  },
  //container items
  app_sub_title: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontWeight: '700',
    fontSize: 24,
    color: '#1A1E25',
    textAlign: 'left',
    paddingBottom: 10
  },
  app_sub_details: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: COLORS.nav_grey,
    textAlign: 'left',
    paddingBottom: 10
  }
});

export default styles;
