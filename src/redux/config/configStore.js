import { createStore } from 'redux';
import { combineReducers } from 'redux';
import counter from '../modules/counter';

const rootReducer = combineReducers({
  counter,
});
const store = createStore(rootReducer);

export default store;
