import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import MoovitHeading3 from './MoovitHeading3';
import { useRouter } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import MoovitText from './MoovitText';

interface NavHeaderProps {
    title: string;
    backButton?: boolean;
    backButtonLabel?: string;
    nextButton?: boolean;
    nextButtonLabel?: string;
};

// TODO figure out how to pass in paged for next button
const NavHeader: React.FC<NavHeaderProps> = ({ title, backButton, backButtonLabel, nextButton, nextButtonLabel }) => {
    const router = useRouter();

    return (
        <View style={{ backgroundColor: 'transparent' }}>
            <View style={{ backgroundColor: 'transparent' }}>
                {backButton && (
                    <TouchableOpacity onPress={() => router.back()}>
                        <Feather name="arrow-left" size={24} color="black" />
                        <MoovitText>{ backButtonLabel }</MoovitText>
                    </TouchableOpacity>
                )}
                <MoovitHeading3>{title}</MoovitHeading3>
                {/* {nextButton && (
                    <button onClick={nextButton.action}>
                    {nextButton.type === 'save' ? 'Save' : nextButton.type === 'create' ? 'Create' : 'Edit'}
                    </button>
                )} */}
            </View>
        </View>
    );
};
export default NavHeader;