const initState = {
	notes: []
}

const reducer = (state = initState, action) => {
	switch (action.type) {
		case 'ADD_NOTE':
			return { ...state, notes: [ ...state.notes, action.payload ] }
		case 'HANDLE_COMPLETED':
			return {
				...state,
				notes: [
					...state.notes.map(note => {
						if ( note.id !== action.payload ) return note
						else return { ...note, completed: !note.completed }
					})
				]
			}
		default:
			return { ...state }
	}
}

export default reducer