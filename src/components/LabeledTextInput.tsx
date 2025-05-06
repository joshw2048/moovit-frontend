import React from 'react';

import { TextInput, StyleSheet, View } from 'react-native';
import MoovitText from './MoovitText';
import { Colors } from '@/constants/styles'

/**
 * Component for a labeled text input with dynamic styles based on if it's focused and prefilled
 *  @param {string} prefilledText - Optional prefilled text to determine styles
 *  @param {string} labelText - Text for the label
 * Note: Prefilled: grey background, no border, black text & when selected, gets black border and bold label. Focused: white background, black border, black text & when selected, gets blue border and bold label
 */
interface LabeledTextInputProps {
    prefilledText?: string;
    labelText: string;
    placeholderText?: string;
}

const LabeledTextInput: React.FC<LabeledTextInputProps> = ({ prefilledText, labelText, placeholderText}) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [text, setText] = React.useState(prefilledText || '');

    return (
        <View style={styles.labeledTextInputWrapper}>
            <MoovitText style={{ 
            color: isFocused ? (prefilledText ? 'black' : Colors.moovitBlue) : 'black', 
            fontFamily: isFocused ? 'InterBold' : 'Inter' ,
            marginBottom: '2%',
            }}>
            {labelText}
            </MoovitText>
            <TextInput style={{ 
                backgroundColor: prefilledText ? Colors.defaultGrey : 'transparent', 
                borderColor: prefilledText ? (isFocused ? 'black' : 'transparent') : (isFocused ? Colors.moovitBlue : 'black'), 
                borderWidth: isFocused ? 3 : 1,
                borderRadius: 8,
                height: 35,
                paddingHorizontal: 10
            }}
            placeholder={placeholderText}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            />
        </View>
    )};

const styles = StyleSheet.create({
    labeledTextInputWrapper: {
        marginBottom: '3%',
    }
});

export default LabeledTextInput; 