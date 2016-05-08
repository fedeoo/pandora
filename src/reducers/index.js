import {combineReducers} from 'redux';
import cInstances from './cInstances';
import cmd from './cmd';

export default combineReducers({
  cInstances,
  cmd
});
