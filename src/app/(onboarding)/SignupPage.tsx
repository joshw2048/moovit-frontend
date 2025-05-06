import NavHeader from "@/components/NavHeader";
import LabeledTextInput from "@/components/LabeledTextInput";
import MoovitSubText from "@/components/MoovitSubText";
import React from "react";
import { Linking, View, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/styles"
import MoovitText from "@/components/MoovitText";
import { useRouter } from "expo-router";

interface SignupPageProps {}

const SignupPage: React.FC<SignupPageProps> = () => {
    // TODO: fix back button, fix header, style, make username and password required, validate password, make input field be spaced better
    const router = useRouter();

    return (
        <View style={[styles.screen]}>
            <View style={[styles.header]}>
                <NavHeader title='Sign Up' backButton={true}/>
            </View>
            <View style={[styles.inputArea]}>
                <LabeledTextInput labelText="Username"></LabeledTextInput>
                <LabeledTextInput labelText="Password"></LabeledTextInput>
            </View>
            <View>
                <TouchableOpacity style={[styles.nextButton]} onPress={() => {
                    // TODO: Handle next button logic here
                    router.navigate('../ContactInfoPage');
                }}>
                    <MoovitText style={{color: 'white', fontFamily: 'InterBold'}}>Next</MoovitText>
                </TouchableOpacity>
            </View>
            <View style={[styles.disclaimerArea]}>
                <MoovitSubText>
                    By signing up you agree to our{" "}
                    <MoovitSubText style={[styles.hyperlink]} onPress={() => Linking.openURL('https://www.google.com/search?q=terms+of+service')}>
                        Terms of Service.
                    </MoovitSubText>
                </MoovitSubText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        marginTop: '7%',
        marginLeft: '7%',
        marginRight: '7%'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '5%',
    },
    inputArea: {
        marginTop: '2%',
        marginBottom: '2%'
    },
    LabeledInput: {
        marginBottom: '5%',
    },
    nextButton: {
        marginBottom: '2%',
        marginTop: '2%',
        borderRadius: 8,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.moovitBlue,
        height: 35,
    },
    hyperlink: {
        // TODO: try this to avoid duping fontSize: https://gist.github.com/neilsarkar/c9b5fc7e67bbbe4c407eec17deb7311e
        color: Colors.moovitBlue,
        textDecorationLine: 'underline',
        fontSize: 12,
    },
    disclaimerArea: {
        marginTop: '2%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default SignupPage;
