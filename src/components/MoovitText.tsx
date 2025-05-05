import React from 'react';

import { Text, TextProps, StyleSheet } from 'react-native';

interface MoovitTextProps extends TextProps {
    children: React.ReactNode;
}

const MoovitText: React.FC<MoovitTextProps> = ({ children, style, ...props }) => {
    return (
        <Text style={[styles.text, style]} {...props}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: 'Inter',
    },
});

export default MoovitText;