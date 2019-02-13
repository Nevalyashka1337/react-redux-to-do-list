import { createStore } from 'redux'
import reducer from './reducer'

export const configStore = () => {
	const store = createStore(
		reducer,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)

	if ( process.env.NODE_ENV === 'development' && module.hot ) {
		module.hot.accept('./reducer', () => {
			store.replaceReducer(reducer)
		})
	}

	return store
}