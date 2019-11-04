import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  textInput: {
    marginBottom: 20,
    borderWidth: 1,
    padding: 10
  }
});

export default styles;
