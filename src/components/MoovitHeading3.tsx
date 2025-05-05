import React from 'react';
import MoovitText from './MoovitText';
import { TextProps } from 'react-native';

interface MoovitHeading3Props extends TextProps {
    children: React.ReactNode;
}

const MoovitHeading3: React.FC<MoovitHeading3Props> = ({ children, ...props }) => {
    return <MoovitText style={{ fontSize: 18, fontFamily: 'InterBold'}} {...props}>
        {children}
    </MoovitText>;
}
export default MoovitHeading3;