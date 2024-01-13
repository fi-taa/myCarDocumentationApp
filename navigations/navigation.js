import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignInPage from '../screens/signIn/signIn';
import SignUpPage from '../screens/signup/SignUp';

const AppNavigator = createStackNavigator(
    {
        SignIn: { screen: SignInPage },
        SignUp: { screen: SignUpPage },
    },
    {
        initialRouteName: 'SignIn',
    }
);

export default createAppContainer(AppNavigator);
