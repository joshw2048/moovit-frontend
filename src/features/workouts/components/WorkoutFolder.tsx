import React from 'react';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import MoovitHeading3 from '@/components/MoovitHeading3';
import AntDesign from '@expo/vector-icons/AntDesign';
import WorkoutCard from './WorkoutCard';

interface WorkoutFolderProps {
    title: string
}
 
 /**
  * A collapsable folder of workouts. Essentially lets a user group their various workouts into a routine (folder)
  * @param param0 
  * @returns 
  */
 const WorkoutFolder: React.FC<WorkoutFolderProps> = ({
    title,
 }) => {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const animation = React.useRef(new Animated.Value(1)).current; // 1 = expanded, 0 = collapsed
    const [contentHeight, setContentHeight] = React.useState(0);    

    React.useEffect(() => {
        Animated.timing(animation, {
            toValue: isCollapsed ? 0 : 1,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [isCollapsed]);

    const containerHeight = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, contentHeight], 
    });
 
     return (
         <View>
            <View style={[styles.headerRow]}>
                {/* add carrot for dropdown that sets isCollapsed to opposite */}
                <MoovitHeading3>{ title }</MoovitHeading3>
                <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
                    <AntDesign
                        name={isCollapsed ? "down" : "right"}
                        size={20}
                        color="black"
                    />
                </TouchableOpacity>
            </View>
            <Animated.View style={{ height: containerHeight, overflow: 'hidden' }}>
                <View 
                    onLayout={e => setContentHeight(e.nativeEvent.layout.height)}
                    style={[styles.folderContainer]}
                >
                    {/* Render workout cards as before */}
                    <WorkoutCard title={"TODO"} lastPerformed={"TODO"} exercises={["TODO", "TODO", "TODO", "TODO", "TODO", "TODO"]} />
                    <WorkoutCard title={"TODO"} lastPerformed={"TODO"} exercises={["TODO", "TODO"]} />
                    <WorkoutCard title={"TODO"} lastPerformed={"TODO"} exercises={["TODO", "TODO"]} />
                    <WorkoutCard title={"TODO"} lastPerformed={"TODO"} exercises={["TODO", "TODO"]} />
                    <WorkoutCard title={"TODO"} lastPerformed={"TODO"} exercises={["TODO", "TODO"]} />
                </View>
            </Animated.View>
         </View>
     );
 }
 
 const styles = StyleSheet.create({
     labelText: {
         fontFamily: 'InterBold'
     },
     container: {
         marginBottom: '5%'
     },
     headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 8,
        minHeight: 24,
     },
    folderContainer: {
        marginTop: '2%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between', 
    },
 });
 
 export default WorkoutFolder;