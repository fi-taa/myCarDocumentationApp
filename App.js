import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, StatusBar, View } from 'react-native';
import WelcomePage from './screens/welcomeScreen.js';
import SignInPage from './screens/signIn.jsx';
import SignUpPage from './screens/signUp.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="black" // Set the status bar color to white
        barStyle="white-content" // Set the status bar text color to dark
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#3498db',
              opacity: 0.5
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen name="Welcome" component={WelcomePage} />
          <Stack.Screen name="SignIn" component={SignInPage} />
          <Stack.Screen name="SignUp" component={SignUpPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
