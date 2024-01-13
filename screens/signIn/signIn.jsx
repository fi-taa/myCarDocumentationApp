import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignInPage = () => {
  const navigation = useNavigation();
  const handleSignIn = () => {
    // Handle sign-in logic
    console.log('Sign In button pressed');
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic
    console.log('Forgot Password pressed');
  };

  const handleSignUp = () => {
    // Navigate to the SignUp screen
    navigation.navigate('SignUp');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/181071.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />

        <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signUpLink}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    height: 40,
    width: '85%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 30,
    paddingLeft: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 15,
    marginRight: '8%',
  },
  forgotPasswordText: {
    color: 'white',
    textDecorationLine: 'underline',
    fontSize: 15,
  },
  signInButton: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 8,
    width: '85%',
    alignItems: 'center',
    marginBottom: 15,
  },
  signInButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signUpText: {
    color: 'white',
    marginRight: 5,
    fontSize: 15,
  },
  signUpLink: {
    color: 'white',
    textDecorationLine: 'underline',
    fontSize: 15,
  },
});

export default (SignInPage);
