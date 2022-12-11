/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import styles from './saved-styles';
import { TopNavigation, Layout } from '@ui-kitten/components';
import CustomInputs from '../../../../components/inputs';
import { SearchIconEva } from '../../../../assets/theme/icons';
import CustomItemCard from '../../../../components/Item card';

const SavedScreen = ({ navigation }) => {
    const [data, setData] = useState([]);

    const renderTitle = props => (
        <View style={styles.titleContainer}>
            <CustomInputs
                inputType="PRIMARY"
                size="large"
                placeholder="Search saved items"
                iconLeft={SearchIconEva}
            // onChangeText={}
            />
        </View>
    );
    return (
        <>
            <SafeAreaView style={styles.mainContainer}>
                <TopNavigation title={renderTitle} />
                <View style={styles.divider} />
                <Layout style={styles.bodyContainer}>
                    <CustomItemCard likeIconShow={true} />
                    {/* <FlatList data={ } renderItem={ } /> */}
                </Layout>
            </SafeAreaView>
        </>
    );
};

export default SavedScreen;
