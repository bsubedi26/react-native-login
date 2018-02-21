import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../store';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

export default () => {
    /* ------------- Redux Configuration ------------- */
    const middlewares = [
        thunk,
        promiseMiddleware()
    ]
    const enhancers = composeWithDevTools({})(applyMiddleware(...middlewares))
    const store = createStore(rootReducer, enhancers)
    return store
}
