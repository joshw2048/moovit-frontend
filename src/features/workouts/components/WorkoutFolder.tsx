import React from 'react';
import { View, StyleSheet } from 'react-native';
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
            {/* add carrot for dropdown that sets isCollapsed to opposite */}
            <AntDesign name="right" size={24} color="black"/>
            <MoovitHeading2>{ title }</MoovitHeading2>
            {/* TODO fix conditional rendering of number of workout cards */}
            <WorkoutCard title={"TODO"} lastPerformed={"TODO"} exercises={["TODO", "TODO"]}></WorkoutCard>
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
 
 export default WorkoutFolder;