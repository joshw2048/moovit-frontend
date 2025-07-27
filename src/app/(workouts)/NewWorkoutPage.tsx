import MoovitHeading3 from '@/components/MoovitHeading3';
import MoovitText from '@/components/MoovitText';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { TouchableOpacity, StyleSheet, View, TextInput, Dimensions } from 'react-native';

// TODO make this page
const NewWorkoutPage: React.FC = () => {
    return (
        <View style={styles.pageContainer}>
            <View style={styles.headerRow}>
                <TouchableOpacity 
                    onPress={() => router.back()}
                    style={styles.leftButton}
                >
                    <AntDesign name="close" size={18} color="black" />
                </TouchableOpacity>

                <View style={styles.headerCenter}>
                    <MoovitHeading3>New Template</MoovitHeading3>
                </View>

                {/* TODO make this a save button that saves the workout template, should stay grey until changes are made */}
                <View style={styles.rightButtonWrapper}>
                    <TouchableOpacity 
                        onPress={() => console.log('pressed next')}
                        style={styles.rightButton}
                    >
                        <MoovitText style={styles.rightButtonText}>Save</MoovitText>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <TextInput
                    style={styles.titleInput}
                    placeholder="Template title"
                    placeholderTextColor="#A9A9A9"
                    value="" // TODO set this to a state variable
                    // onChangeText={setTitle}
                />
                <TextInput
                    style={styles.notesInput}
                    placeholder="Notes"
                    placeholderTextColor="#A9A9A9"
                    value="" // TODO set this to a state variable
                    // onChangeText={setNotes}
                    multiline
                />
                <View style={styles.horizontalLine} />
            </View>
            <View style={styles.exercisesBox}>
                <MoovitText style={{ color: '#A9A9A9', textAlign: 'center' }}>
                    this is kind of a bad workout... add exercises below
                </MoovitText>
            </View>
            <TouchableOpacity style={styles.addExercisesButton}>
                <MoovitText style={styles.addExercisesButtonText}>
                    + Add Exercises
                </MoovitText>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    pageContainer: {
        margin: '7%', 
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftButton: {
        flex: 1,
        alignItems: 'flex-start',
    },
    headerCenter: {
        flex: 2,
        alignItems: 'center',
    },
    rightButton: {
        alignItems: 'center',
        backgroundColor: '#6CA2FE',
        borderRadius: 5,
        padding: 8,
        justifyContent: 'center',
        width: '70%',
        height: '100%',
    },
    rightButtonText: {
        color: 'white',
    },
    rightButtonWrapper: {
        flex: 1,
        alignItems: 'flex-end',
    },
    titleInput: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 8,
        borderBottomWidth: 0,
        marginTop: '10%', 
    },
    notesInput: {
        fontSize: 16,
        color: '#222',
        borderBottomWidth: 0,
    },
    horizontalLine: {
        height: 1,
        backgroundColor: '#E0E0E0',
        marginVertical: 8,
    },
    exercisesBox: {
        backgroundColor: '#F0F0F0',
        borderRadius: 8,
        marginHorizontal: 24,
        marginVertical: 12,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addExercisesButton: {
        backgroundColor: '#B6D0FF',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').width * .08,
        width: Dimensions.get('window').width - 48,
    },
    addExercisesButtonText: {
        color: '#6C9FFE',
        fontFamily: 'InterBold',
    },
});

export default NewWorkoutPage