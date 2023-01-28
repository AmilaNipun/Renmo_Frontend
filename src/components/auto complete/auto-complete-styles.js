import { StyleSheet } from 'react-native';
import COLORS from '../../assets/theme/colors';

const styles = StyleSheet.create({
  lightBackground: {
    backgroundColor: COLORS.reguar_white,
  },
  thickBackground: {
    backgroundColor: COLORS.white,
  },
  textInputPrimary: {
    borderRadius: 30,
    borderWidth: 2,
  },
  textInputSecondary: {
    borderRadius: 10,
  },
  errorMsg: {
    fontSize: 12,
    marginLeft: 15,
    marginTop: 5,
  },
});

export default styles;
