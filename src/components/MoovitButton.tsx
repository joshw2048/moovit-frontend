import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import MoovitText from './MoovitText';
import { AntDesign } from '@expo/vector-icons';

// A custom type because we want to conditionally render an icon
type AntDesignIconName = keyof typeof AntDesign.glyphMap;

interface MoovitButtonProps {
    label: string;
    height?: number;
    width?: number | 'auto';
    icon?: AntDesignIconName;
    onPress?: () => void;
}

const MoovitButton: React.FC<MoovitButtonProps> = ({ 
    label, 
    height = 35, 
    width = 'auto',
    icon,
    onPress,
}) => {
    return (
        <TouchableOpacity 
            style={[
                styles.button, 
                { 
                    height: height,
                    width: width,
                }
            ]}
            onPress={onPress}
        >
            {icon && (
                <AntDesign 
                    name={icon} 
                    size={20} 
                    style={styles.icon}
                />
            )}
            <MoovitText>
                {label}
            </MoovitText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    icon: {
        marginRight: 8,
    }
});

export default MoovitButton;