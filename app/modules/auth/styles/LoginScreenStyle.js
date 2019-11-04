import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  loginFormView: {
    flex: 1,
    justifyContent: 'center',
    width: '80%'
  }
});

export default styles;
