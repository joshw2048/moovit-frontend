import MoovitHeading1 from '@/components/MoovitHeading1';
import MoovitHeading2 from '@/components/MoovitHeading2';
import MoovitText from '@/components/MoovitText';
import { Colors } from '@/constants/styles';
import WorkoutFolder from '@/features/workouts/components/WorkoutFolder';
import { useRouter } from 'expo-router';
import React from 'react';

import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

interface WorkoutsHomePageProps {}

// TODO make header with welcome, area to start new blank workout (?), create new workout button, folders, new folder button
// TODO get rid of ugly expo header, figure out how to 
const WorkoutsHomePage: React.FC<WorkoutsHomePageProps> = () => {
    const router = useRouter(); 
    
    return (
        <ScrollView style={[styles.screen]}>
            <View style={[styles.headerContainer]}>
                <MoovitHeading1>Workouts</MoovitHeading1>
            </View>
            <View style={[styles.placeholder]}>
                {/* insert graphic here later */}
            </View>
            <View>
                <MoovitHeading2>Quick Start</MoovitHeading2>
                <TouchableOpacity style={[styles.emptyWorkoutButton]}>
                    {/* TODO make this an actual plus button */}
                    <MoovitText style={[styles.emptyButtonText]}>+ Start Empty Workout</MoovitText>
                </TouchableOpacity>
            </View>
            <View>
                <MoovitHeading2>Templates</MoovitHeading2>
                <View style={[styles.templateButtonRow]}>
                    <TouchableOpacity style={[styles.templateOptionsButton]}>
                        {/* TODO make this an actual plus button ALSO the onpress should be on the opacity*/}
                        <MoovitText 
                            style={[styles.emptyButtonText]}
                            onPress={() => router.push('/(workouts)/NewWorkoutPage')}
                        >
                            + Create New
                        </MoovitText>
                    </TouchableOpacity>
                    <View style={{ width: 16 }} />
                    <TouchableOpacity 
                        style={[styles.templateOptionsButton]}
                        onPress={() => router.push('/(workouts)/EditWorkoutPage')}
                    >
                        {/* TODO make this an actual search button and move navving to actual workout template*/}
                        <MoovitText style={[styles.emptyButtonText]} onPress={() => router.push('/(workouts)/EditWorkoutPage')}>-o Search</MoovitText>
                    </TouchableOpacity>
                    {/* Take in a list of folders and programtically render them into a component*/}
                    {/* For now, it's a singular folder component to show it */}
                </View>
                <View style={styles.workoutFolderContainer}>
                    <WorkoutFolder title="Upper Body Workouts" />
                    <WorkoutFolder title="Lower Body Workouts" />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        marginTop: '7%',
        marginLeft: '7%',
        marginRight: '7%'
    },
    headerContainer: {
        marginBottom: '5%'
    },
    placeholder: {
        backgroundColor: 'grey',
        height: 150,
        width: '100%',
        marginBottom: '5%'
    },
    emptyWorkoutButton: {
        marginBottom: '5%',
        marginTop: '5%',
        borderRadius: 8,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.moovitBlue,
        height: 35,        
    },
    emptyButtonText: {
        color: 'white', 
    },
    templateOptionsButton: {
        flex: 1,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.moovitBlue,
        height: 35,
    },
    templateButtonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '5%',
    },
    workoutFolderContainer: {
        marginTop: '5%',
        rowGap: 32, 
        // TODO add styling for workout folder container
    }
})

export default WorkoutsHomePage