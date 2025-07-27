import React from 'react';
import MoovitText from './MoovitText';
import { StyleProp, TextProps, TextStyle } from 'react-native';

interface MoovitHeading3Props extends TextProps {
    children: React.ReactNode;
}

const MoovitHeading3: React.FC<MoovitHeading3Props> = ({ children, style, ...props }) => {
    return <MoovitText style={[
        { fontSize: 18, fontFamily: 'InterBold' },
        style
    ]} 
    {...props}
>
        {children}
    </MoovitText>;
}
export default MoovitHeading3;