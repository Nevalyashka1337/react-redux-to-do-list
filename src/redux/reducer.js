import { 
	ADD_NOTE,
	HANDLE_COMPLETED,
	HANDLE_MAIN_FILTER,
 DELETE_NOTE
 } from './actionTypes'

export const initState = {
	notes: [],
	mainFilter: 'all'
}

const reducer = (state = initState, action) => {
	switch (action.type) {
		case ADD_NOTE:
			return { ...state, notes: [ ...state.notes, action.payload ] }
		case DELETE_NOTE:
			return {
				...state,
				notes: [
					...state.notes.filter(note => {
						return note.id !== action.payload
					})
				]
			}
		case HANDLE_MAIN_FILTER:
			return { ...state, mainFilter: action.payload }
		case HANDLE_COMPLETED:
			return {
				...state,
				notes: [
					...state.notes.map(note => {
						return note.id === action.payload ? { ...note, completed: !note.completed } : note
					})
				]
			}
		default:
			return state
	}
}

export default reducer