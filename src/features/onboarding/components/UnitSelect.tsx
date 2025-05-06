import SegmentedControl from '@react-native-segmented-control/segmented-control';
import MoovitText from '@/components/MoovitText';
import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '@/constants/styles';

interface UnitSelectProps {
    label: string;
    options: string[];
    customStyles?: {};
}

const UnitSelect: React.FC<UnitSelectProps> = ({
    label,
    options,
    customStyles = {}
}) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <View style={[styles.container]}>
            <MoovitText style={[styles.labelText]}>
                {label}
            </MoovitText>
            <SegmentedControl
                values={options}
                selectedIndex={selectedIndex}
                onChange={(event) => {
                    const newIndex = event.nativeEvent.selectedSegmentIndex;
                    setSelectedIndex(newIndex);
                }}
                style={[{ marginTop: 10, marginBottom: 10 }]}
                tintColor={Colors.moovitBlue}
                backgroundColor={Colors.defaultGrey}
                fontStyle={{
                    color: 'black'
                }}
                activeFontStyle={{
                    color: 'white'
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    labelText: {
        fontFamily: 'InterBold'
    },
    container: {
        marginBottom: '5%'
    }
});

export default UnitSelect;