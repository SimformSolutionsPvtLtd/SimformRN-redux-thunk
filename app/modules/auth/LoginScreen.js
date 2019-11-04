import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles/LoginScreenStyle';
import { Images } from '../../theme';
import { FormTextInput } from '../../components';
import { Strings } from '../../constants';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmailChange = email => {
    this.setState({ email: email });
  };

  handlePasswordChange = password => {
    this.setState({ password: password });
  };

  renderForm = () => {
    return (
      <View style={styles.loginFormView}>
        <FormTextInput
          value={this.state.email}
          placeholder={Strings.emailPlaceholder}
          onChangeText={this.handleEmailChange}
        />
        <FormTextInput
          value={this.state.password}
          placeholder={Strings.passwordPlaceholder}
          onChangeText={this.handlePasswordChange}
        />
        {/* <Button label={strings.LOGIN} onPress={this.handleLoginPress} /> */}
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        {this.renderForm()}
      </View>
    );
  }
}

export default LoginScreen;
