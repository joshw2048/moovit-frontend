import React from 'react';

import SegmentedControl from '@react-native-segmented-control/segmented-control';
import MoovitHeaderText from '@/components/MoovitHeading3';

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
    return <>
        <MoovitHeaderText>
            {label}
        </MoovitHeaderText>
        <SegmentedControl
            values={options}
            selectedIndex={0}
            onChange={(event) => {
                console.log(event.nativeEvent.selectedSegmentIndex);
            }}
            style={[{ marginTop: 10, marginBottom: 10 }]}
        />
    </>
}

export default UnitSelect;