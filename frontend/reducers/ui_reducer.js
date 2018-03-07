import { combineReducers } from 'redux';
import { merge } from 'lodash';
import modal from './modal_reducer';

const uiReducer = combineReducers({ modal });

export default uiReducer;
