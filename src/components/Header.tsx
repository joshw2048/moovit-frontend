import React from 'react';
import { View } from 'react-native';
import MoovitHeading3 from './MoovitHeading3';

interface HeaderProps {
    title: string;
    leftButton?: {
        type: 'back' | 'close';
        action: () => void;
    };
    rightButton?: {
        type: 'save' | 'create' | 'edit';
        action: () => void;
    };
};

const Header: React.FC<HeaderProps> = ({ title, leftButton, rightButton }) => {
    return (
        <View style={{ backgroundColor: 'transparent' }}>
            <View style={{ backgroundColor: 'transparent' }}>
            {leftButton && (
                <button onClick={leftButton.action}>
                {leftButton.type === 'back' ? '<' : 'X'}
                </button>
            )}
            <MoovitHeading3>{title}</MoovitHeading3>
            {rightButton && (
                <button onClick={rightButton.action}>
                {rightButton.type === 'save' ? 'Save' : rightButton.type === 'create' ? 'Create' : 'Edit'}
                </button>
            )}
            </View>
        </View>
    );
};
export default Header;