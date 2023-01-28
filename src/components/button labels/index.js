/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '@ui-kitten/components';
import {
    FlatList,
} from 'react-native-gesture-handler';
import styles from './button-labels-styles';

const CustomButtonLabels = props => {
    const Item = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
            <Text style={[styles.title, { color: textColor }]}>{item.value}</Text>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => {
        let index = props.value.findIndex((obj) => obj === item.value);
        if (index !== -1) {
            var backgroundColor = '#14274E';
            var color = '#FFFFFF';
        } else {
            var backgroundColor = '#F1F6F9';
            var color = '#394867';
        }

        return (
            <Item
                item={item}
                onPress={() => props.onPress(item.value)}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        );
    };

    return (
        <>
            <View
                style={
                    props.labelBackground === 'light'
                        ? styles.lightBackground
                        : styles.thickBackground
                }>
                <Text style={styles.label} category="label">
                    {props.label}
                </Text>
                <FlatList
                    data={props.items}
                    renderItem={renderItem}
                    keyExtractor={item => item.value}
                    extraData={props.value}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </>
    );
};

export default CustomButtonLabels;

// Set default props
CustomButtonLabels.defaultProps = {
    labelBackground: 'light',
    items: [],
};
