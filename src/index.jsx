/* eslint-disable global-require */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

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
