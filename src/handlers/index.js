import { combineReducers } from 'redux';
import { connect } from 'react-redux';
import { setupDusk, getPartFromHandlers } from 'redux-dusk';
import * as App from './App';
import * as Calculator from './Calculator';

export const handlers = {
  [App.nameSpace]: App,
  [Calculator.nameSpace]: Calculator,
};

export const {
  nameSpaces,
  types,
  reducers,
  stateMapper,
  actionsMapper,
} = setupDusk(handlers, { connect });

export const combinedLogic = getPartFromHandlers(handlers, 'logic');
export const combinedReducer = combineReducers(reducers);
