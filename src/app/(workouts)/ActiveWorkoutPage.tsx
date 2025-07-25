import MoovitHeading1 from '@/components/MoovitHeading1';
import React from 'react';

import { View, Text, Button } from 'react-native';

// TODO make this page
const ActiveWorkoutPage: React.FC = () => {
    return (
        // TODO: center stuff, fix spacing
        <View>
            <MoovitHeading1>Welcome to Moovit!</MoovitHeading1>
            <View>
                {/* insert graphic here later */}
            </View>
            {/* add styling to these buttons */}
            <Button title="Log In" onPress={() => console.log('Log In pressed')} />
            <Button title="Sign Up" onPress={() => console.log('Create Account pressed')} />
        </View>
    );
}

export default ActiveWorkoutPage