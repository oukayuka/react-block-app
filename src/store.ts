import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'reducers';
import rootTask from 'tasks';
import { isProduction } from 'utils/envHandler';

const sagaMiddleware = createSagaMiddleware();
const getMiddleware = () => {
  const middleware = applyMiddleware(sagaMiddleware);

  return isProduction() ? middleware : composeWithDevTools(middleware);
};

const store = createStore(rootReducer, getMiddleware());
export default store;

sagaMiddleware.run(rootTask);
