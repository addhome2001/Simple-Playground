import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
    };
  }

  componentDidCatch() {
    this.setState({ error: 'Somthing was wrong.' });
  }

  render() {
    const { error } = this.state;
    if (error) {
      return <div>{ error }</div>;
    }
    return this.props.children;
  }
}

ErrorHandler.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ErrorHandler;
