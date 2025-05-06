import Header from '@/components/NavHeader';
import LabeledTextInput from '@/components/LabeledTextInput';
import MoovitHeading2 from '@/components/MoovitHeading2';
import MoovitHeading3 from '@/components/MoovitHeading3';
import MoovitSubText from '@/components/MoovitSubText';
import MoovitText from '@/components/MoovitText';
import { Colors } from '@/constants/styles';
import React from 'react';

import { View, StyleSheet, TouchableOpacity } from 'react-native';

const InputGoalsPage: React.FC = () => {
    return (
        <View style={[styles.screen]}>
            <View style={[styles.header]}>
                <Header title='Input Goals' />
            </View>
            <View>
                <MoovitText style ={{marginBottom: '7%'}}>
                    Add goals that you want to track.
                </MoovitText>
            </View>
            <View>
                {/* TODO these goal sections should be components */}
                <View style={[styles.allGoalsSection]}>
                    <MoovitHeading3 customStyle={[styles.sectionHeader]}>Body</MoovitHeading3>
                    <View style={[styles.goalSection]}>
                        <MoovitText style={[styles.goalHeader]}>Bodyweight</MoovitText>
                        <View style={[styles.bodyGoals]}>
                            <LabeledTextInput labelText="Current" />
                            <LabeledTextInput labelText="Goal" />
                        </View>
                    </View>
                    <View style={[styles.goalSection]}>
                        <MoovitText style={[styles.goalHeader]}>Body Fat Percentage</MoovitText>
                        <View style={[styles.bodyGoals]}>
                            <LabeledTextInput labelText="Current" />
                            <LabeledTextInput labelText="Goal" />
                        </View>
                    </View>
                </View>
                <View>
                    <MoovitHeading3 customStyle={[styles.sectionHeader]}>Exercises</MoovitHeading3>
                    <View>
                        <MoovitText style={[styles.goalHeader]}>Bench Press</MoovitText>
                        <View style={[styles.exerciseGoals]}>
                            <View style={[styles.inputContainer]}>
                                <LabeledTextInput labelText="Current" />
                            </View>
                            <View style={[styles.inputContainer]}>
                                <LabeledTextInput labelText="Goal" />
                            </View>
                            <View style={[styles.oneRMContainer]}>
                                <MoovitText style={[ styles.oneRMLabel ]}>1 Rep Max</MoovitText>
                                {/* TODO make this number not static */}
                                <MoovitHeading2>100</MoovitHeading2>
                            </View>
                        </View>
                    </View>
                    <View>
                        <MoovitText style={[styles.goalHeader]}>Bench Press</MoovitText>
                        <View style={[styles.exerciseGoals]}>
                            <View style={[styles.inputContainer]}>
                                <LabeledTextInput labelText="Current" />
                            </View>
                            <View style={[styles.inputContainer]}>
                                <LabeledTextInput labelText="Goal" />
                            </View>
                            <View style={[styles.oneRMContainer]}>
                                <MoovitText style={[ styles.oneRMLabel ]}>1 Rep Max</MoovitText>
                                {/* TODO make this number not static */}
                                <MoovitHeading2>100</MoovitHeading2>
                            </View>
                        </View>
                    </View>
                    <View>
                        <MoovitText style={[styles.goalHeader]}>Bench Press</MoovitText>
                        <View style={[styles.exerciseGoals]}>
                            <View style={[styles.inputContainer]}>
                                <LabeledTextInput labelText="Current" />
                            </View>
                            <View style={[styles.inputContainer]}>
                                <LabeledTextInput labelText="Goal" />
                            </View>
                            <View style={[styles.oneRMContainer]}>
                                <MoovitText style={[ styles.oneRMLabel ]}>1 Rep Max</MoovitText>
                                {/* TODO make this number not static */}
                                <MoovitHeading2>100</MoovitHeading2>
                            </View>
                        </View>
                    </View>
                </View>
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
        marginTop: '7%',
        marginLeft: '7%',
        marginRight: '7%',
        flex: 1
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '7%',
    },
    bodyGoals: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between'
    },
    exerciseGoals: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginBottom: '5%'
    },
    sectionHeader: {
        marginBottom: '3%'
    },
    goalHeader: {
        marginBottom: '2%'
    },
    goalSection: {
        marginBottom: '5%'
    },
    allGoalsSection: {
        marginBottom: '2%'
    },
    inputContainer: {
        flex: 4,
        marginRight: 15
    },
    oneRMContainer: {
        flex: 3,
        marginLeft: 5
    },
    oneRMLabel: {
        marginBottom: '7%'
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

export default InputGoalsPage;