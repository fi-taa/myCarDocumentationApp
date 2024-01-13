import {React, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Picker from '@react-native-picker/picker'

const SignUpPage = () => {
    const navigation = useNavigation();

    const handleRegister = () => {
        // Handle registration logic
        console.log('Register button pressed');
    };
    const goToSignIn = () => {
        navigation.navigate('SignIn');
    };

    return (
        <ImageBackground
            source={require('../../assets/images/181071.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Sign Up</Text>

                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    autoCapitalize="words"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Middle Name"
                    autoCapitalize="words"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    autoCapitalize="words"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    keyboardType="phone-pad"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Subcity/Zone"
                    autoCapitalize="words"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Woreda"
                    keyboardType="numeric"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Kebele"
                    keyboardType="numeric"
                />

                <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                    <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signInContainer} onPress={goToSignIn}>
                    <Text style={styles.signInText}>Already have an account?</Text>
                    <Text style={styles.signInLink}> Sign In</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent black background
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white',
    },
    input: {
        height: 40,
        width: '85%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    registerButton: {
        backgroundColor: '#3498db',
        padding: 15,
        borderRadius: 8,
        width: '85%',
        alignItems: 'center',
    },
    registerButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signInContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    signInText: {
        color: 'white',
        marginRight: 5,
        fontSize: 15,
    },
    signInLink: {
        color: '#3498db',
        textDecorationLine: 'underline',
        fontSize: 15,
    },
});

export default SignUpPage;
