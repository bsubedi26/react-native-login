import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
const middleware = applyMiddleware(thunk);

import { 
  initReducer,
  fetchInProgressReducer  
} from './reducers'


export default (data = {}) => {
  const rootReducer = combineReducers({
    //every modules reducer should be define here
    // [app.NAME]: app.reducer
    "INIT": initReducer,
    "FETCH_IN_PROGRESS": fetchInProgressReducer
  })

  return createStore(rootReducer, data, middleware)
}