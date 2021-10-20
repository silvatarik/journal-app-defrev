import { createStore, combineReducers,applyMiddleware ,compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { notesReducer } from '../reducers/notesReducer';

//Para usar varios reducers necesitamos usar combineReducers y composeEnhancers para usar varios reducers y las devTools
export const reducers = combineReducers({
    auth: authReducer,
    notes: notesReducer,
});

const composeEnhancers = composeWithDevTools({}) || compose;
export const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
  ));