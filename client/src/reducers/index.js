import { combineReducers } from 'redux';

import postreducer from './posts';
import auth from './auth';

export const reducers = combineReducers({ postreducer, auth });