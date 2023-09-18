// Create store from Redux
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';

// Reducers
import appReducer from './reducers/appReducer';

const middlewares = [];

const rootReducers = combineReducers({
  users: appReducer,
});

const store = createStore(rootReducers, applyMiddleware(...middlewares));

export default store;
