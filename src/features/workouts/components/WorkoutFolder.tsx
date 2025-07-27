import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import MoovitHeading2 from '@/components/MoovitHeading2';
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
 
     return (
         <View>
            <View style={[styles.headerRow]}>
                {/* add carrot for dropdown that sets isCollapsed to opposite */}
                <MoovitHeading2>{ title }</MoovitHeading2>
                <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
                    <AntDesign
                        name={isCollapsed ? "down" : "right"}
                        size={20}
                        color="black"
                    />
                </TouchableOpacity>
            </View>
            {!isCollapsed && (
                <View style={[styles.folderContainer]}>
                    {/* TODO fix conditional rendering of number of workout cards */}
                    <WorkoutCard title={"TODO"} lastPerformed={"TODO"} exercises={["TODO", "TODO", "TODO", "TODO", "TODO", "TODOoooooooooooooooooooooooooooooooooooooooooooooooooooo"]}></WorkoutCard>
                    <WorkoutCard title={"TODO"} lastPerformed={"TODO"} exercises={["TODO", "TODO"]}></WorkoutCard>
                    <WorkoutCard title={"TODO"} lastPerformed={"TODO"} exercises={["TODO", "TODO"]}></WorkoutCard>
                    <WorkoutCard title={"TODO"} lastPerformed={"TODO"} exercises={["TODO", "TODO"]}></WorkoutCard>
                    <WorkoutCard title={"TODO"} lastPerformed={"TODO"} exercises={["TODO", "TODO"]}></WorkoutCard>
                </View>
            )}
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
        height: '10%',
    },
    folderContainer: {
        marginTop: '2%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between', 
    },
 });
 
 export default WorkoutFolder;