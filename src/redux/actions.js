export const addNewNote = (text) => {
	const note = { id: 1, completed: false, text };
	return {
		type: 'ADD_NOTE',
		payload: note
	}
}