import React from 'react';
import MoovitText from './MoovitText';
import { TextProps } from 'react-native';
import { Colors } from "@/constants/styles"

interface MoovitSubTextProps extends TextProps {
    children: React.ReactNode;
}

const MoovitSubText: React.FC<MoovitSubTextProps> = ({ children, ...props }) => {
    return <MoovitText style={{ fontSize: 12, color: Colors.darkGrey}} {...props}>
        {children}
    </MoovitText>;
}
export default MoovitSubText;
