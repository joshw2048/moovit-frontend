import React from 'react';
import MoovitText from './MoovitText';
import { TextProps } from 'react-native';

interface MoovitSubTextProps extends TextProps {
    children: React.ReactNode;
}

const MoovitSubText: React.FC<MoovitSubTextProps> = ({ children, ...props }) => {
    return <MoovitText style={{ fontSize: 12 }} {...props}>
        {children}
    </MoovitText>;
}
export default MoovitSubText;

//TODO in onboarding folder, make component for segment select. then will likely need a component for popup modal during onboarding