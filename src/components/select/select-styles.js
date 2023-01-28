import { StyleSheet } from 'react-native';
import COLORS from '../../assets/theme/colors';

const styles = StyleSheet.create({
  lightBackground: {
    backgroundColor: COLORS.reguar_white,
  },
  thickBackground: {
    backgroundColor: COLORS.white,
  },
  label: {
    marginBottom: 4,
    color: COLORS.nav_grey,
  },
  selectBackground: {
    backgroundColor: '#fafafc',
  },
  errorMsg: {
    fontSize: 12,
    marginLeft: 15,
    marginTop: 5,
    color: '#9E1212',
  },
});

export default styles;
