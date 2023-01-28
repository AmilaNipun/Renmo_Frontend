/* eslint-disable react-native/no-inline-styles */
import React, { useState, useCallback, useMemo, useRef } from 'react';
import { SafeAreaView, View, TouchableWithoutFeedback } from 'react-native';
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
} from '@gorhom/bottom-sheet';
import CustomInputs from '../../../../components/inputs';
import {
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';
import { Formik } from 'formik';
import CustomSelect from '../../../../components/select';
import { ITEM_TYPES, TERMS, PAYMENT_PERIOD } from '../../../../assets/const';
import CustomButtonLabels from '../../../../components/button labels';
import { Shadow } from 'react-native-shadow-2';
import CustomAutoComplete from '../../../../components/auto complete';
import CITIES from '../../../../assets/cities.json';

const ItemsSummaryScreen = () => {
  const [search_clicked, setSearchClicked] = useState(false);
  const [data, setData] = React.useState(CITIES);
  const formRef = useRef();

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
  const snapPoints = useMemo(() => ['96%'], []);

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

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const setSelectedItems = (setFieldValue, values, item) => {
    let index = values.looking_term.findIndex(obj => obj === item);
    if (index !== -1) {
      values.looking_term.splice(index, 1);
      setFieldValue('looking_term', [...values.looking_term]);
    } else {
      setFieldValue('looking_term', [...values.looking_term, item]);
    }
  };

  const filter = (item, query) =>
    item.label.toLowerCase().includes(query.toLowerCase());

  const onTypeCity = (setFieldValue, cities, nextValue) => {
    setFieldValue('city', nextValue);
    setData(cities.filter(item => filter(item, nextValue)));
  };

  const onSelect = (setFieldValue, index) => {
    setFieldValue('city', CITIES[index].value);
  };

  //on submit add form
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView style={{ flex: 1 }}>
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

          <BottomSheetModal
            style={styles.bottomSheetStyles}
            ref={bottomSheetModalRef}
            enableDismissOnClose={true}
            index={0}
            snapPoints={snapPoints}
            keyboardBehavior="interactive"
            onChange={handleSheetChanges}>
            <Shadow
              offset={[0, 1]}
              distance={4}
              stretch={true}
              sides="bottom"
              style={styles.shadowBox}>
              <View style={styles.headerContainer}>
                <Button
                  status="control"
                  size="small"
                  onPress={handleClosePress}
                  textStyle={styles.btnText}
                  style={styles.cancelBtn}>
                  Cancel
                </Button>
                <Text category="s1">Add Item</Text>
                <Button
                  appearance="filled"
                  status="primary"
                  size="small"
                  textStyle={styles.btnText}
                  style={styles.saveBtn}
                  onPress={handleSubmit}>
                  Save
                </Button>
              </View>
            </Shadow>
            <ScrollView contentContainerStyle={styles.contentContainer}>
              <Layout style={styles.formContainer}>
                <Formik
                  innerRef={formRef}
                  // validationSchema={schema}
                  onSubmit={values => onSubmit(values)}
                  initialValues={{
                    item_type: '',
                    looking_term: [],
                    payment_period: '',
                    amount: '',
                    room_count: '',
                    vehicle_brand: '',
                    vehicle_modal: '',
                    vehicle_year: '',
                    city: '',
                  }}>
                  {({
                    errors,
                    handleChange,
                    handleBlur,
                    setFieldValue,
                    submitCount,
                    values,
                  }) => (
                    <>
                      <Layout style={{ marginTop: 10 }}>
                        <CustomSelect
                          items={ITEM_TYPES}
                          label="Item Type"
                          selectMainBackground="thick"
                          onValueChange={value =>
                            setFieldValue('item_type', value)
                          }
                          errorMessage={
                            submitCount > 0 && errors.item_type
                              ? errors.item_type
                              : null
                          }
                          value={values.item_type}
                          useNativeAndroidPickerStyle={false}
                        />
                      </Layout>
                      <Layout
                        style={{
                          marginTop: 20,
                        }}>
                        <CustomButtonLabels
                          label="Renting Term"
                          labelBackground="thick"
                          items={TERMS}
                          value={values.looking_term}
                          onPress={item =>
                            setSelectedItems(setFieldValue, values, item)
                          }
                        />
                      </Layout>
                      <Layout style={{ marginTop: 20 }}>
                        <CustomSelect
                          items={PAYMENT_PERIOD}
                          label="Payment Period"
                          selectMainBackground="thick"
                          onValueChange={value =>
                            setFieldValue('payment_period', value)
                          }
                          errorMessage={
                            submitCount > 0 && errors.payment_period
                              ? errors.payment_period
                              : null
                          }
                          value={values.payment_period}
                          useNativeAndroidPickerStyle={false}
                        />
                      </Layout>
                      <Layout style={{ marginTop: 10 }}>
                        <CustomInputs
                          label="Payment Amount"
                          size="large"
                          placeholder="Please Enter Amount"
                          inputBackground="thick"
                          keyboardType="decimal"
                          onChangeText={handleChange('amount')}
                          onBlur={handleBlur('amount')}
                          value={values.amount}
                          errorMessage={
                            submitCount > 0 && errors.amount
                              ? errors.amount
                              : null
                          }
                          status={
                            submitCount > 0 && errors.amount
                              ? 'danger'
                              : 'basic'
                          }
                        />
                      </Layout>
                      {values.item_type === 'House' && (
                        <Layout style={{ marginTop: 10 }}>
                          <CustomInputs
                            label="Room Count"
                            size="large"
                            placeholder="Please Enter Room Count"
                            inputBackground="thick"
                            keyboardType="numeric"
                            // iconLeft={EmailIconEva}
                            onChangeText={handleChange('room_count')}
                            onBlur={handleBlur('room_count')}
                            value={values.room_count}
                            errorMessage={
                              submitCount > 0 && errors.room_count
                                ? errors.room_count
                                : null
                            }
                            status={
                              submitCount > 0 && errors.room_count
                                ? 'danger'
                                : 'basic'
                            }
                          />
                        </Layout>
                      )}

                      {values.item_type === 'Car' && (
                        <>
                          <Layout style={{ marginTop: 10 }}>
                            <CustomInputs
                              label="Vehicle Brand"
                              size="large"
                              placeholder="Please Enter Vehicle Brand"
                              inputBackground="thick"
                              keyboardType="text"
                              onChangeText={handleChange('vehicle_brand')}
                              onBlur={handleBlur('vehicle_brand')}
                              value={values.vehicle_brand}
                              errorMessage={
                                submitCount > 0 && errors.vehicle_brand
                                  ? errors.vehicle_brand
                                  : null
                              }
                              status={
                                submitCount > 0 && errors.vehicle_brand
                                  ? 'danger'
                                  : 'basic'
                              }
                            />
                          </Layout>
                          <Layout style={{ marginTop: 10 }}>
                            <CustomInputs
                              label="Vehicle Modal"
                              size="large"
                              placeholder="Please Enter Vehicle Modal"
                              inputBackground="thick"
                              keyboardType="text"
                              onChangeText={handleChange('vehicle_modal')}
                              onBlur={handleBlur('vehicle_modal')}
                              value={values.vehicle_modal}
                              errorMessage={
                                submitCount > 0 && errors.vehicle_modal
                                  ? errors.vehicle_modal
                                  : null
                              }
                              status={
                                submitCount > 0 && errors.vehicle_modal
                                  ? 'danger'
                                  : 'basic'
                              }
                            />
                          </Layout>
                          <Layout style={{ marginTop: 10 }}>
                            <CustomInputs
                              label="Vehicle Manufacture Year"
                              size="large"
                              placeholder="Please Enter Vehicle Manufacture Year"
                              inputBackground="thick"
                              keyboardType="text"
                              onChangeText={handleChange('vehicle_year')}
                              onBlur={handleBlur('vehicle_year')}
                              value={values.vehicle_year}
                              errorMessage={
                                submitCount > 0 && errors.vehicle_year
                                  ? errors.vehicle_year
                                  : null
                              }
                              status={
                                submitCount > 0 && errors.vehicle_year
                                  ? 'danger'
                                  : 'basic'
                              }
                            />
                          </Layout>
                        </>
                      )}
                      <Layout style={{ marginTop: 10 }}>
                        <CustomAutoComplete
                          items={data}
                          label="City"
                          size="large"
                          placeholder="Please Enter City"
                          inputBackground="thick"
                          onChangeText={nextValue =>
                            onTypeCity(setFieldValue, CITIES, nextValue)
                          }
                          onSelect={index => onSelect(setFieldValue, index)}
                          value={values.city}
                          errorMessage={
                            submitCount > 0 && errors.city ? errors.city : null
                          }
                          status={
                            submitCount > 0 && errors.city ? 'danger' : 'basic'
                          }
                        />
                      </Layout>
                    </>
                  )}
                </Formik>
              </Layout>
            </ScrollView>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default ItemsSummaryScreen;
