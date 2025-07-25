import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

interface ActiveWorkoutFooterProps {
   
}

/**
 * The footer for an active workout with save and cancel buttons.
 * @param param0 
 * @returns 
 */
const ActiveWorkoutFooter: React.FC<ActiveWorkoutFooterProps> = ({
   
}) => {

    return (
        <View>
            <TouchableOpacity>
                Cancel button here
            </TouchableOpacity>
            <TouchableOpacity>
                Complete workout button here
            </TouchableOpacity>
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

export default ActiveWorkoutFooter;