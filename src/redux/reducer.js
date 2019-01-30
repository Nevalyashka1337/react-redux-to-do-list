const initState = {
	notes: []
}

const reducer = (state = initState, action) => {
	switch (action.type) {
		case 'ADD_NOTE':
			return { ...state, notes: [ ...state.notes, action.payload ] }
		default:
			return { ...state }
	}
}

export default reducer