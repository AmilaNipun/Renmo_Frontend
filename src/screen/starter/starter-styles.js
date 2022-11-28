import { StyleSheet } from 'react-native';
import COLORS from '../../assets/theme/colors';
import { StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 9,
  },
  starterImageContainer: {
    flex: 3,
    justifyContent: 'center',
    alignContent: 'center',
  },
  starterImage: {
    flex: 1,
    width: '100%',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  app_sub_title: {
    color: COLORS.light_blue,
    textAlign: 'center',
  },
  app_sub_details: {
    color: COLORS.nav_grey,
    textAlign: 'center',
    fontSize: 17,
    marginTop: 10,
  },
  primaryBtnStyle: {
    borderRadius: 30,
  },
});

export default styles;
