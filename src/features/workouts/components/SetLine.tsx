import MoovitHeading3 from '@/components/MoovitHeading2';
import MoovitText from '@/components/MoovitText';
import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

interface SetLineProps {
    number: number,
    previous?: string
 }
 
 /**
  * A singular set within an exercise. 
  * @param param0 
  * @returns 
  */
 // TODO finish stub
 const SetLine: React.FC<SetLineProps> = ({
    number,
    previous
 }) => {
 
     return (
         <View>
            <MoovitHeading3>{ number }</MoovitHeading3>
            <MoovitText>{ previous }</MoovitText>
            <TextInput style={[styles.weightInput]}></TextInput>
            <TextInput style={[styles.weightInput]}></TextInput>
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
     weightInput: {

     },
     repsInput: {

     }
 });
 
 export default SetLine;