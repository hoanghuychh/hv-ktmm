'use strict';
import {setStoreState} from 'src/actions/appActions';
import {createReducer} from 'typesafe-actions';
import {AppAction} from 'src/actions/actionTypes';

export interface AppReducerState {
  version: string;
  current: string;
}

const initialState: AppReducerState = {
  version: '1.0.0',
  current: 'hanoi',
};

const appReducer = createReducer<AppReducerState, AppAction>(
  initialState,
).handleAction(setStoreState, (state, action) =>
  Object.assign({}, initialState, state, action.payload),
);

export default appReducer;
