import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
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
        <View style={[styles.container]}>
            <View style={[styles.headerContainer]}>
                {backButton ? (
                    <TouchableOpacity 
                        onPress={() => router.back()}
                        style={styles.buttonContainer}
                    >
                        <AntDesign name="arrowleft" size={24} color="black" />                        
                        <MoovitText>{backButtonLabel}</MoovitText>
                    </TouchableOpacity>
                ) : <View style={styles.placeholder} />}

                <MoovitHeading3>{title}</MoovitHeading3>

                {nextButton && nextButtonPath ? (
                    <TouchableOpacity onPress={() => router.push(nextButtonPath as any)} style={styles.buttonContainer}>
                        <MoovitText>{ nextButtonLabel }</MoovitText>
                        <AntDesign name="right" size={24} color="black" />
                    </TouchableOpacity>
                ) : <View style={styles.placeholder} /> }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        backgroundColor: 'transparent',
        width: '100%'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    placeholder: {
        width: 24,  // Same width as the icon to maintain balance
    }
});

export default NavHeader;