import MoovitHeading3 from '@/components/MoovitHeading2';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import SetLine from './SetLine';

interface ExerciseInActiveWorkoutProps {
    title: string,
 }
 
 /**
  * An exercise move in an active workout, with a title, notes, meatball menu, and SetLines
  * @param param0 
  * @returns 
  */
 // TODO finish stub
 const ExerciseInActiveWorkout: React.FC<ExerciseInActiveWorkoutProps> = ({
    title
 }) => {
 
     return (
         <View>
            <MoovitHeading3> { title } </MoovitHeading3>
            {/* TODO figure out how to render notes*/}
            {/* TODO figure out how to render meatball menu*/}
            {/* TODO figure out how to render multiple SetLines programatically*/}
            <SetLine number={1}></SetLine>
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
 
 export default ExerciseInActiveWorkout;