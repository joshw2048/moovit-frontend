import MoovitSubText from '@/components/MoovitSubText';
import MoovitText from '@/components/MoovitText';
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

interface WorkoutCardProps {
   title: string,
   lastPerformed: string,
   exercises: string[]
}

/**
 * A card representing a workout that can be started. Has a title, meatball menu, last performed date, and preview into workout.
 * @param param0 
 * @returns 
 */
const WorkoutCard: React.FC<WorkoutCardProps> = ({
   title,
   lastPerformed,
   exercises
}) => {
    // convert lastPerformed to a Date object
    const lastPerformedDate = new Date(lastPerformed);

    // format lastPerformedDate to a readable string
    const formattedDate = isNaN(lastPerformedDate.getTime())
        ? 'Never'
        : `${lastPerformedDate.toLocaleString('default', { month: 'long' })}, ${lastPerformedDate.getDate()}, ${lastPerformedDate.getFullYear()}`;

    return (
        <View style={[styles.container]}>
            <MoovitText style={{fontFamily: 'InterBold'}}>{ title }</MoovitText>
            <View style={[styles.timeContainer]}>
                <AntDesign name="clockcircleo" size={12} color="black" />
                <MoovitSubText> { formattedDate }</MoovitSubText>
            </View>
            <MoovitSubText
                numberOfLines={2}
                ellipsizeMode="tail"
            >
                { exercises.join(', ') }
            </MoovitSubText>
        </View>
    );
}

const styles = StyleSheet.create({
    labelText: {
        fontFamily: 'InterBold'
    },
    container: {
        marginBottom: '5%',
        borderColor: 'grey',
        borderWidth: 0.5,
        borderRadius: 10,
        padding: '5%',
        width: '48%',
        height: 115,
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: '3%',
    },
});

export default WorkoutCard;