export const addNewNote = (text) => {
	return {
		type: 'ADD_NOTE',
		payload: { 
			completed: false,
			text
		}
	}
}