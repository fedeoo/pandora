import React from 'react';
import ReactDOM from 'react-dom';

import {patch} from 'extensible-polyfill';
patch('immutable');

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from './reducers';

import Main from './skeleton/index.jsx';
require('./index.scss');

let store = createStore(reducers);
ReactDOM.render(<Provider store={store}><Main /></Provider>, document.getElementById('app'));
