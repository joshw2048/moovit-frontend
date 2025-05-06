import { StyleSheet, View } from 'react-native';

// TODO: make this page once i intend on sending emails
const EmailOptInPage = () => {
    return (
        <View style={[styles.screen]}>
            <View style={[styles.header]}>
                Email Opt In
            </View>
        </View>
    )
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
    unitSelect: {

    }
});

export default EmailOptInPage;