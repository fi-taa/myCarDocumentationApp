import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { MaterialIcons } from '@expo/vector-icons';

const WelcomePage = () => {
    const carouselContents = [
        'Content 1: Placeholder text about the company Content 1: Placeholder text about the company Content 1: Placeholder text about the company Content 1: Placeholder text about the company',
        'Content 2: Placeholder text about the company Content 2: Placeholder text about the company Content 2: Placeholder text about the company Content 2: Placeholder text about the company',
        'Content 3: Placeholder text about the company Content 3: Placeholder text about the company Content 3: Placeholder text about the company Content 3: Placeholder text about the company',
        'Content 4: Placeholder text about the company Content 4: Placeholder text about the company Content 4: Placeholder text about the company Content 4: Placeholder text about the company',
        'Content 5: Placeholder text about the company Content 5: Placeholder text about the company Content 5: Placeholder text about the company Content 5: Placeholder text about the company',
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

            <TouchableOpacity style={styles.loginButton} >
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
        marginTop: 50,
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
