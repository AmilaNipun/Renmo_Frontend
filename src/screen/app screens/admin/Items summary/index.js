/* eslint-disable react-native/no-inline-styles */
import React, { useState, useCallback, useMemo, useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  Button,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import styles from './listed-item-styles';
import {
  PlusCircleIconFillEva,
  SearchIconEva,
  SearchIconFillEva,
} from '../../../../assets/theme/icons';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import CustomInputs from '../../../../components/inputs';
import { Shadow } from 'react-native-shadow-2';

const ItemsSummaryScreen = () => {
  const [search_clicked, setSearchClicked] = useState(false);

  const changeSearchView = () => setSearchClicked(!search_clicked);

  const renderRightActions = () => (
    <TopNavigationAction icon={SearchIconFillEva} onPress={changeSearchView} />
  );

  const renderLeftActions = () => (
    <TopNavigationAction
      icon={PlusCircleIconFillEva}
      onPress={handlePresentModalPress}
    />
  );

  const renderCancelIcon = props => (
    <TouchableWithoutFeedback onPress={changeSearchView}>
      <Icon {...props} name="close-circle" />
    </TouchableWithoutFeedback>
  );

  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%', '96%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleClosePress = () => bottomSheetModalRef.current.close();

  const renderTitle = props => (
    <View
      style={
        search_clicked ? styles.fullTitleContainer : styles.titleContainer
      }>
      {search_clicked ? (
        <CustomInputs
          inputType="PRIMARY"
          size="large"
          placeholder="Search booked items"
          iconLeft={SearchIconEva}
          iconRight={renderCancelIcon}
        // onChangeText={}
        />
      ) : (
        <Text category="h6">Listed Items Summary</Text>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <BottomSheetModalProvider>
        <TopNavigation
          style={styles.topNavigationStyles}
          alignment="center"
          title={renderTitle}
          accessoryRight={!search_clicked && renderRightActions}
          accessoryLeft={!search_clicked && renderLeftActions}
        />
        <View style={styles.divider} />
        <Layout style={styles.bodyContentContainer}>
          <View style={styles.divider} />
        </Layout>
        <Shadow offset={[0, -13]} distance={6}>
          <BottomSheetModal
            style={styles.bottomSheetStyles}
            ref={bottomSheetModalRef}
            enableDismissOnClose={true}
            index={2}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}>
            <BottomSheetScrollView
              contentContainerStyle={styles.contentContainer}>
              <View style={styles.contentContainer}>
                <Button title="Close Sheet" onPress={handleClosePress} />
                <Text>Awesome 🎉</Text>
              </View>
            </BottomSheetScrollView>
          </BottomSheetModal>
        </Shadow>
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
};

export default ItemsSummaryScreen;
