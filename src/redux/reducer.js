const initState = {
	notes: [
		{id: 0, completed: false, text: 'Lorem ipsum amet consectetur adipisicing elit. Culpa magni quisquam, laboriosam blanditiis quod doloremque aliquid nulla. Dolorum, aut pariatur'},
		{id: 1, completed: true, text: 'Dolor sit  consectetur  elit. Culpa magni quisquam, laboriosam blanditiis quod doloremque aliquid nulla. Dolorum, aut pariatur'},
		{id: 2, completed: false, text: 'Iipsum dolor  adipisicing elit. Culpa magni quisquam, laboriosam blanditiis quod doloremque aliquid nulla. Dolorum, aut pariatur'}
	],
	mainFilter: 'all'
}

const reducer = (state = initState, action) => {
	switch (action.type) {
		case 'ADD_NOTE':
			return { ...state, notes: [ ...state.notes, action.payload ] }
		case 'DELETE_NOTE':
			return {
				...state,
				notes: [
					...state.notes.filter(note => {
						return note.id !== action.payload
					})
				]
			}
		case 'CHANGE_MAIN_FILTER':
			return {
				...state,
				mainFilter: action.payload
			}
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