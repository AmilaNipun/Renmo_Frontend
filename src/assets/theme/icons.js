/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Icon } from '@ui-kitten/components';

//default icons
export const HomeIconEva = props => <Icon {...props} name="home-outline" />;

export const BackIconEva = props => (
    <Icon name="chevron-left" width={35} height={35} {...props} />
);

export const ForwardIconEva = props => (
    <Icon name="chevron-right-outline" width={35} height={35} {...props} />
);

export const EmailIconEva = props => <Icon {...props} name="email-outline" />;

export const LockIconEva = props => <Icon {...props} name="lock-outline" />;

export const AlertIconEva = props => <Icon {...props} name="lock-outline" />;

export const PhoneIconEva = props => <Icon {...props} name="phone-outline" />;

export const ListIconEva = props => <Icon {...props} name="list-outline" />;

export const PersonIconEva = props => <Icon {...props} name="person-outline" />;

export const BookIconEva = props => <Icon {...props} name="book-outline" />;

export const HeartIconEva = props => <Icon {...props} name="heart-outline" />;

export const IosForwardIconEva = props => (
    <Icon {...props} name="arrow-ios-forward-outline" />
);

export const MapIconEva = props => <Icon {...props} name="map-outline" />;

export const ArrowBackIconEva = props => <Icon {...props} name="arrow-back-outline" />;

//Fill Icons
export const PersonIconFillEva = props => <Icon {...props} name="person" />;

export const CardIconFillEva = props => <Icon {...props} name="credit-card" />;

export const QuestionCircleIconFillEva = props => (
    <Icon {...props} name="question-mark-circle" />
);

export const ToggleLeftIconFillEva = props => (
    <Icon {...props} name="toggle-left" />
);

export const SettingsIconFillEva = props => <Icon {...props} name="settings" />;

export const LockIconFillEva = props => <Icon {...props} name="lock" />;
