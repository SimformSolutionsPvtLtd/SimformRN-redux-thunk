import * as React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles/FormTextInputStyles';

class FormTextInput extends React.Component {
  render() {
    const { style, ...otherProps } = this.props;
    return <TextInput style={[styles.textInput, style]} {...otherProps} />;
  }
}

FormTextInput.propTypes = {
  style: PropTypes.object
};

export default FormTextInput;
