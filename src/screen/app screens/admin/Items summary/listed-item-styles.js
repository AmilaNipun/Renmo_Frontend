/* eslint-disable prettier/prettier */
import { StyleSheet, StatusBar } from 'react-native';
import COLORS from '../../../../assets/theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.reguar_white,
  },
  topNavigationStyles: {
    backgroundColor: COLORS.reguar_white,
  },
  divider: {
    borderBottomColor: COLORS.neutral_grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
  titleContainer: {
    flex: 1,
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  fullTitleContainer: {
    flex: 1,
    marginHorizontal: 15,
    justifyContent: 'center',
    width: '90%',
  },
  bodyContentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: COLORS.reguar_white,
  },
  contentContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    paddingBottom: 80,
  },
  shadowBox: {
    backgroundColor: COLORS.white,
    zIndex: 3,
    elevation: 3,
  },
  headerContainer: {
    flexDirection: 'row',
    height: 50,
    marginHorizontal: 15,
    marginVertical: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  saveBtn: {
    borderRadius: 50,
    paddingVertical: 1,
    height: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelBtn: {
    borderRadius: 50,
    paddingVertical: 1,
    height: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    lineHeight: 1,
    textAlignVertical: 'center',
    marginBottom: 3,
  },
  bottomSheetStyles: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
});

export default styles;
