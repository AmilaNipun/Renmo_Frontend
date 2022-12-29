import { View, Text } from 'react-native';
import React, { useCallback, useMemo, useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

const AddItem = () => {
    // ref
    const bottomSheetRef = useRef < BottomSheet > null;

    // variables
    const snapPoints = useMemo(() => ['25%', '50%'], []);

    // callbacks
    const handleSheetChanges = useCallback(index => {
        console.log('handleSheetChanges', index);
    }, []);

    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}>
            <View>
                <Text>Awesome 🎉</Text>
            </View>
        </BottomSheet>
    );
};

export default AddItem;
