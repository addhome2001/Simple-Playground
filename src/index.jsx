import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// waiting for React 16
// if (process.env.DEBUG) {
//   const Perf = require('react-addons-perf');
//   window.Perf = Perf;
// }

ReactDOM.render(
  <App greeting={{ text: 'Hello' }} />,
  document.getElementById('container'),
);
