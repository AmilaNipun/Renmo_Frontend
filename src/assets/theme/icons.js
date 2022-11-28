/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Icon } from '@ui-kitten/components';

//default icons
export const HomeIconEva = props => <Icon {...props} name="home-outline" />;

export const BackIconEva = props => (
    <Icon name="chevron-left" width={35} height={35} {...props} />
);

export const EmailIconEva = props => <Icon {...props} name="email-outline" />;

export const LockIconEva = props => <Icon {...props} name="lock-outline" />;

export const AlertIconEva = props => <Icon {...props} name="lock-outline" />;

export const PhoneIconEva = props => <Icon {...props} name="phone-outline" />;
