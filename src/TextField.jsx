import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ text }) => <span>{ text }</span>;

TextField.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextField;
