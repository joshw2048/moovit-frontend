import NavHeader from '@/components/NavHeader';
import MoovitText from '@/components/MoovitText';
import { Colors } from '@/constants/styles';
import UnitSelect from '@/features/onboarding/components/UnitSelect';
import React from 'react';

import { View, StyleSheet, TouchableOpacity } from 'react-native';

const SelectUnitsPage: React.FC = () => {
    return (
        <View style={[styles.screen]}>
            <View style={[styles.header]}>
                <NavHeader title='Select Units' backButton={true} nextButton={true} nextButtonLabel='Skip' nextButtonPath='../InputGoalsPage'/>
            </View>
            <View>
                <UnitSelect label="Weight" options={['Kilograms', 'Pounds']}></UnitSelect>
                <UnitSelect label="Distance" options={['Kilometers', 'Miles']}></UnitSelect>
                <UnitSelect label="Weight" options={['Centimeters', 'Inches']}></UnitSelect>
            </View>
            <View style={[styles.buttonContainer]}>
                <TouchableOpacity
                    style={[styles.nextButton]} onPress={() => {
                    console.log("Next button pressed");
                }}>
                    <MoovitText style={{color: 'white', fontFamily: "InterBold"}}>Next</MoovitText>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: '7%',
        marginLeft: '7%',
        marginRight: '7%'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '5%',
    },
    nextButton: {
        backgroundColor: Colors.moovitBlue,
        borderRadius: 8,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: '5%',
        left: 0,
        right: 0
    }
});

export default SelectUnitsPage;