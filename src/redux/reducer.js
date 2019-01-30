const initState = {
	list: []
}

const reducer = (state = initState, action) => {
	switch (action.type) {
		case 'ADD_NOTE':
			return { ...state, ...state.list.push(action.payload) }
		default:
			return { ...state }
	}
}

export default reducer