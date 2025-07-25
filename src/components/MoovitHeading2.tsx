import React from 'react';
import MoovitText from './MoovitText';
import { StyleProp, TextProps, TextStyle } from 'react-native';

interface MoovitHeading2Props extends TextProps {
    children: React.ReactNode;
    customStyle?: StyleProp<TextStyle>;
}

const MoovitHeading2: React.FC<MoovitHeading2Props> = ({ children, customStyle, ...props }) => {
    return <MoovitText style={[
        { fontSize: 20, fontFamily: 'InterBold' },
        customStyle
    ]} 
    {...props}
>
        {children}
    </MoovitText>;
}
export default MoovitHeading2;