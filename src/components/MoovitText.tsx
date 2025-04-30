import React from 'react';

import { Text, TextProps } from 'react-native';

interface MoovitTextProps extends TextProps {
    children: React.ReactNode;
}

const MoovitText: React.FC<MoovitTextProps> = ({ children, ...props }) => {
    return <Text style={{ fontSize: 16 }} {...props}>
        {children}
    </Text>;
};

export default MoovitText;