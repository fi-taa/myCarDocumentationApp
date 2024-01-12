import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#87CEFA" />
      <Text style={styles.text}>Welcome to the Home Page!</Text>

      {/* App bar at the bottom */}
      <View style={styles.appBar}>
        <TouchableOpacity style={styles.iconContainer}>
          <MaterialIcons name="home" size={24} color="white" />
          {/* <Text style={styles.iconText}>Home</Text> */}
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <MaterialIcons name="calendar" size={24} color="white" />
          {/* <Text style={styles.iconText}>Calendar</Text> */}
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <MaterialIcons name="notifications" size={24} color="white" />
          {/* <Text style={styles.iconText}>Notification</Text> */}
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <MaterialIcons name="person" size={24} color="white" />
          {/* <Text style={styles.iconText}>Profile</Text> */}
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Set the background color of the main container
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#001F3F', // Dark blue background color for the app bar
    paddingVertical: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    color: 'white',
    marginTop: 5,
  },
});

export default HomeScreen;