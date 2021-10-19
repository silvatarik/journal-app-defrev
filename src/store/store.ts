import { createStore, combineReducers,applyMiddleware ,compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

//Para usar varios reducers necesitamos usar combineReducers y composeEnhancers para usar varios reducers y las devTools
export const reducers = combineReducers({
    auth: authReducer
})

const composeEnhancers = composeWithDevTools({}) || compose;
export const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));