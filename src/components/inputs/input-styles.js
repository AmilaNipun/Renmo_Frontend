import {StyleSheet} from 'react-native';
import COLORS from '../../assets/const/colors';

const styles = StyleSheet.create({
  defaultLabel: {
    fontFamily: 'SF-Pro-Display-Semibold',
    fontWeight: '600',
    fontSize: 14,
    color: '#1A1E25',
  },
  textBox: {
    borderWidth: 0,
  },
  defaultTextBox: {
    borderColor: COLORS.highlight_grey,
    borderRadius: 10,
    borderWidth: 1,
  },
});

export default styles;
