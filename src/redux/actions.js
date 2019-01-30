export const addNewNote = (text) => {
	return {
		type: 'ADD_NOTE',
		payload: {
			id: new Date().getTime(),
			completed: false,
			text
		}
	}
}