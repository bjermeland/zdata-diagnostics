import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(reduxThunk)))

export type RootState = ReturnType<typeof store.getState>

export default store
