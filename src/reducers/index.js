import { combineReducers } from 'redux';
import ReducerPeoples from './reducer_peoples';

const rootReducer = combineReducers({
  peoples: ReducerPeoples
});

export default rootReducer;
