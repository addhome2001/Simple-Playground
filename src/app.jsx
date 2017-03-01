import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'World',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    const { value: name } = target;
    this.setState({ name });
  }

  render() {
    const { name } = this.state;
    const { text } = this.props.greeting;
    return (
      <div>
        <h3>{ text } { name }!</h3>
        <span>Your name: </span>
        <input type="text" onChange={this.handleInputChange} />
      </div>
    );
  }
}

App.propTypes = {
  greeting: PropTypes.objectOf(PropTypes.string).isRequired,
};
