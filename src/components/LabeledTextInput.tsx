import React from 'react';

import { TextInput, StyleSheet } from 'react-native';
import MoovitText from './MoovitText';
import { Colors } from '@/constants/styles'

// can be prefilled or not
    // if prefilled, black unbold placeholder text, on focus gets black outline, unfocused is gray background, label gets bold
    // if not prefilled, gray placeholder text, on focus gets blue outline, unfocused is no background, label gets blue and bold
// should have x button to clear text
interface LabeledTextInputProps {
    prefilledText?: string;
    labelText: string;
    placeholderText?: string;
}

const LabeledTextInput: React.FC<LabeledTextInputProps> = ({ prefilledText, labelText, placeholderText}) => {
    const [isFocused, setIsFocused] = React.useState(false);

    return (
        <>
            <MoovitText style={{ color: prefilledText ? 'black' : 'blue', fontWeight: isFocused ? 'bold' : 'normal' }}>
                {labelText}
            </MoovitText>
            <TextInput style={{ backgroundColor: prefilledText ? Colors.defaultGrey : 'transparent', borderColor: prefilledText ? (isFocused ? 'black' : 'transparent') : Colors.moovitBlue, borderWidth: isFocused ? 2 : 0}}
                placeholder ={placeholderText}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </>
    )};

const styles = StyleSheet.create({
    label: {
        
    }
});


export default LabeledTextInput; 