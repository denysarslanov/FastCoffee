import { configureStore, Tuple } from '@reduxjs/toolkit'
import rootReducer from './reducers/rootReducer'
import { thunk } from 'redux-thunk'

const store = configureStore({ 
    reducer: rootReducer,
    middleware: () => new Tuple(thunk)
})

export default store