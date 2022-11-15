import{reducer} from './reducer';

import{legacy_createStore as createStore,applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
const middlware = applyMiddleware(thunk)

export const store = createStore(reducer,middlware);