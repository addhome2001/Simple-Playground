/* eslint-disable global-require, no-undef */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

// waiting for React 16
// if (process.env.DEBUG) {
//   const Perf = require('react-addons-perf');
//   window.Perf = Perf;
// }

const render = (Root) => {
  ReactDOM.render(
    <AppContainer>
      <Root greeting={{ text: 'Hello' }} />
    </AppContainer>,
    document.getElementById('container'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./app', () => render(App));
}
