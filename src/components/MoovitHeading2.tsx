import React from 'react';
import MoovitText from './MoovitText';
import { StyleProp, TextProps, TextStyle } from 'react-native';

interface MoovitHeading3Props extends TextProps {
    children: React.ReactNode;
    customStyle?: StyleProp<TextStyle>;
}

const MoovitHeading3: React.FC<MoovitHeading3Props> = ({ children, customStyle, ...props }) => {
    return <MoovitText style={[
        { fontSize: 20, fontFamily: 'InterBold' },
        customStyle
    ]} 
    {...props}
>
        {children}
    </MoovitText>;
}
export default MoovitHeading3;