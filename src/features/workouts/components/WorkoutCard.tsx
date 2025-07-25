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

    return (
        <View>
            <MoovitText style={{fontFamily: 'InterBold'}}>{ title }</MoovitText>
            {/* TODO figure out how the heck to do a meatball menu (component with series of icons, name, and "action"? */}
            <AntDesign name="lock" size={24} color="black" />
            {/* TODO turn lastPerformed into a Date object and then render as string */}
            <MoovitSubText>{ lastPerformed }</MoovitSubText>
            <MoovitSubText>{ exercises }</MoovitSubText>
        </View>
    );
}

const styles = StyleSheet.create({
    labelText: {
        fontFamily: 'InterBold'
    },
    container: {
        marginBottom: '5%',
        borderColor: 'black',
    }
});

export default WorkoutCard;