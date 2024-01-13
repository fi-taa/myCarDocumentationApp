import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const WelcomePage = () => {
    const navigation = useNavigation();

    const handleLoginPress = () => {
        navigation.navigate('SignIn');
    };

    const carouselContents = [

        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Goma Notify</Text>

            <Swiper
                style={styles.carousel}
                autoplay
                autoplayTimeout={5}
                prevButton={
                    <View style={styles.carouselButton}>
                        <MaterialIcons name="chevron-left" size={40} color="black" />
                    </View>
                }
                nextButton={
                    <View style={styles.carouselButton}>
                        <MaterialIcons name="chevron-right" size={40} color="black" />
                    </View>
                }
            >
                {carouselContents.map((content, index) => (
                    <View key={index} style={styles.carouselItem}>
                        <Text style={styles.carouselText}>{content}</Text>
                    </View>
                ))}
            </Swiper>

            <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
                <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: '50%',
        paddingBottom: '40%',
    },
    carousel: {
        height: '80%',
    },
    carouselItem: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30,
        padding: 30,
        backgroundColor: 'white',
    },
    carouselText: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
    },
    welcomeText: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    loginButton: {
        backgroundColor: '#2ecc71', // Attractive background color
        padding: 15,
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center',
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default WelcomePage;
