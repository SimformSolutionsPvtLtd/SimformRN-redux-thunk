import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/HomeScreenStyle';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Home</Text>
      </View>
    );
  }
}

export default HomeScreen;
