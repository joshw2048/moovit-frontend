import MoovitHeading1 from '@/components/MoovitHeading1';
import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ActiveWorkoutHeaderProps {
   title: string,
   notes: string[], 
}

/**
 * The header for an active workout with workout title, notes, and 
 * @param param0 
 * @returns 
 */
// TODO finish stub
const ActiveWorkoutHeader: React.FC<ActiveWorkoutHeaderProps> = ({
   title,
   notes
}) => {

    return (
        <View>
            <MoovitHeading1>
                {title}
            </MoovitHeading1>
            {/* TODO find a way to render notes */}
            { notes } 
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

export default ActiveWorkoutHeader;