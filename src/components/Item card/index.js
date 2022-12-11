/* eslint-disable prettier/prettier */
import { TouchableOpacity, Image, View } from 'react-native';
import React from 'react';
import styles from './item-card-styles';
import ASSETS from '../../assets/theme/assets';
import { Shadow } from 'react-native-shadow-2';
import { HeartIconEva, HeartIconFillEva, PinIconFillEva, StarIconFillEva } from '../../assets/theme/icons';
import { Text } from '@ui-kitten/components';

const CustomItemCard = (props) => {
    return (
        <>
            <Shadow offset={[3, 5]} distance={15}>
                <TouchableOpacity style={styles.itemContainer}>
                    <Image
                        style={styles.cardImage}
                        source={ASSETS.cardImg}
                    />
                    <View style={styles.bodyContainer}>
                        <View style={styles.ratingContainer}>
                            <StarIconFillEva width={20} height={20} fill="#FFBF75" />
                            <Text style={styles.ratingAmount} category="s2">
                                4.8
                            </Text>
                            <Text category="s2" style={styles.ratingCount}>
                                (73)
                            </Text>
                        </View>
                        <View style={styles.detailContainer}>
                            <Text style={styles.cardTitle} category="h6">
                                Entire Bromo mountain view Cabin in Surabaya  in Surabaya
                            </Text>
                            <View style={styles.locationContainer}>
                                <PinIconFillEva width={16} height={16} fill="#7D7F88" />
                                <Text style={styles.cardLocation} category="c1">
                                    Malang, Probolinggo
                                </Text>
                            </View>
                        </View>
                        <View style={styles.pricingContainer}>
                            <View style={styles.innerPricingContainer}>
                                <Text style={styles.amount} category="c1">
                                    $1,290
                                </Text>
                                <Text style={styles.period} category="c1">
                                    / month
                                </Text>
                            </View>
                            {props.likeIconShow &&
                                <HeartIconFillEva width={25} height={25} fill="#EB5757" />
                            }

                        </View>
                    </View>
                </TouchableOpacity>
            </Shadow>
        </>
    );
};

export default CustomItemCard;

// Set default props
CustomItemCard.defaultProps = {
    likeIconShow: false,
};
