import { StyleSheet } from 'react-native';
import COLORS from '../../assets/theme/colors';

const styles = StyleSheet.create({
  darkButton: {
    borderRadius: 30,
    backgroundColor: '#222831',
    paddingTop: 14,
    paddingBottom: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#E3E3E7',
    flexDirection: 'row',
  },
  darkButtonText: {
    fontFamily: 'SF-Pro-Display-Medium',
    fontWeight: '500',
    fontSize: 18,
    color: COLORS.white,
  },
  lightButton: {
    borderRadius: 30,
    backgroundColor: COLORS.sky_blue,
    paddingTop: 13,
    paddingBottom: 13,
    borderWidth: 2,
    borderColor: '#E3E3E7',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  lightButtonText: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontWeight: '900',
    fontSize: 16,
    color: COLORS.neutral_grey,
  },
  frontIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 20,
  },
  rearIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 20,
  },
});

export default styles;
