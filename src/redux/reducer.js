const initState = {
	notes: [
		{ completed: false, text: 'one' },
		{ completed: true, text: 'two' },
		{ completed: false, text: 'three' }
	]
}

const reducer = (state = initState, action) => {
	switch (action.type) {
		case 'ADD_NOTE':
			return { ...state, ...state.notes.push(action.payload) }
		default:
			return { ...state }
	}
}

export default reducer