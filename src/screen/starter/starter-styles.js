import { StyleSheet } from 'react-native';
import COLORS from '../../assets/theme/colors';
import { StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.reguar_white,
  },
  topNavigationStyles: {
    backgroundColor: COLORS.reguar_white,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 9,
    backgroundColor: COLORS.reguar_white,
  },
  starterImageContainer: {
    flex: 3,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: COLORS.reguar_white,
  },
  starterImage: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.reguar_white,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.reguar_white,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.reguar_white,
  },
  app_sub_title: {
    color: COLORS.light_blue,
    textAlign: 'center',
    backgroundColor: COLORS.reguar_white,
  },
  app_sub_details: {
    color: COLORS.nav_grey,
    textAlign: 'center',
    fontSize: 17,
    marginTop: 10,
    backgroundColor: COLORS.reguar_white,
  },
  primaryBtnStyle: {
    borderRadius: 30,
  },
});

export default styles;
