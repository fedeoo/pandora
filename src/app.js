import React from 'react';
import ReactDOM from 'react-dom';

import {patch} from 'extensible-polyfill';
patch('immutable');

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from './reducers';

import Main from './skeleton/index.jsx';
import './app.scss';

let store = createStore(reducers);
if (module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').default);
  });
}
ReactDOM.render(<Provider store={store}><Main /></Provider>, document.getElementById('app'));
