import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import MoovitHeading3 from './MoovitHeading3';
import { useRouter } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import MoovitText from './MoovitText';

interface NavHeaderProps {
    title: string;
    backButton?: boolean;
    backButtonLabel?: string;
    nextButton?: boolean;
    nextButtonLabel?: string;
    nextButtonPath?: string;
};

const NavHeader: React.FC<NavHeaderProps> = ({ title, backButton, backButtonLabel, nextButton, nextButtonLabel, nextButtonPath }) => {
    const router = useRouter();

    return (
        <View style={{ backgroundColor: 'transparent' }}>
            <View style={{ backgroundColor: 'transparent' }}>
                {backButton && (
                    <TouchableOpacity onPress={() => router.back()}>
                        <AntDesign name="arrowleft" size={24} color="black" />                        
                        <MoovitText>{ backButtonLabel }</MoovitText>
                    </TouchableOpacity>
                )}
                <MoovitHeading3>{title}</MoovitHeading3>
                {nextButton && nextButtonPath && (
                    <TouchableOpacity onPress={() => router.push(nextButtonPath as any)}>
                        <MoovitText>{ nextButtonLabel }</MoovitText>
                        <AntDesign name="right" size={24} color="black" />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};
export default NavHeader;