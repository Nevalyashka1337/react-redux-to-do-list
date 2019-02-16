export const addNewNoteAction = text => ({
	type: 'ADD_NOTE', payload: {
		id: new Date().getTime(),
		completed: false,
		text
	}
})

export const changeFilterAction = filter => ({
	type: 'HANDLE_MAIN_FILTER', payload: filter
})

export const handleCompletedAction = id => ({
	type: 'HANDLE_COMPLETED', payload: id
})

export const deleteNoteAction = id => ({
	type: 'DELETE_NOTE', payload: id
})