import { combineReducers } from 'redux';

import { temporaryReducer, TemporaryState } from './temporary';

export interface State {
  temporary: TemporaryState;
}

const rootReducer = combineReducers({
  temporary: temporaryReducer,
});

export default rootReducer;
