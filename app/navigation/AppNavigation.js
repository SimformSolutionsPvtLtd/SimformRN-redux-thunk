import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../modules/auth/LoginScreen';
import HomeScreen from '../modules/home/HomeScreen';

const AuthStack = createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LoginScreen'
  }
);

const HomeStack = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'HomeScreen'
  }
);

// Manifest of possible screens
const PrimaryNav = createSwitchNavigator(
  {
    AuthStack,
    HomeStack
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'AuthStack',
    navigationOptions: {
      //   headerStyle: styles.header
    }
  }
);

export default createAppContainer(PrimaryNav);
