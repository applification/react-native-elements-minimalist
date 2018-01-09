import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

class HeaderTextElement extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
  };
  static defaultProps = {
    color: '#000000',
  };

  render() {
    return (
      <Text
        style={{
          color: this.props.color,
          paddingBottom: 15,
          fontWeight: 'normal',
          fontSize: 17,
        }}
      >
        {this.props.children}
      </Text>
    );
  }
}

export default HeaderTextElement;
