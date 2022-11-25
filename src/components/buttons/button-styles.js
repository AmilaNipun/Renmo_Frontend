import {StyleSheet} from 'react-native';
import COLORS from '../../assets/const/colors';

const styles = StyleSheet.create({
  primaryButton: {
    borderRadius: 30,
    backgroundColor: COLORS.dark_blue,
    height: 50,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    fontFamily: 'SF-Pro-Display-Medium',
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.white,
  },
  secondaryButton: {
    borderRadius: 30,
    backgroundColor: COLORS.sky_blue,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#E3E3E7',
  },
  secondaryButtonText: {
    fontFamily: 'SF-Pro-Display-Medium',
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.neutral_grey,
  },
  darkButton: {
    borderRadius: 30,
    backgroundColor: '#222831',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#E3E3E7',
  },
  darkLogoButton: {
    borderRadius: 30,
    backgroundColor: '#222831',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#E3E3E7',
  },
  darkButtonText: {
    fontFamily: 'SF-Pro-Display-Medium',
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.white,
  },
  frontIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  rearIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  //icon button styles
  transparentIconButton: {
    backgroundColor: 'transparent',
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnIcon: {
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
