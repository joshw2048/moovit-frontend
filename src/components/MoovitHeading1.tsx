import React from 'react';
import MoovitText from './MoovitText';
import { TextProps } from 'react-native';

interface MoovitHeading1Props extends TextProps {
    children: React.ReactNode;
}

const MoovitHeading1: React.FC<MoovitHeading1Props> = ({ children, ...props }) => {
    return <MoovitText style={{ fontSize: 24, fontFamily: 'InterBold'}} {...props}>
        {children}
    </MoovitText>;
}
export default MoovitHeading1;