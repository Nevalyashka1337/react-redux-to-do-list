import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import Note from '../components/Note'
import { handleCompletedAction, deleteNoteAction } from '../redux/actions'
import { mainFilter, notes } from '../redux/selectors'

function ListOfNotes({ notes, mainFilter, handleCompleted, deleteNote }) {
	
	let currentNotes = ( mainFilter === 'active' ) ? notes.filter(note => !note.completed) :
		( mainFilter === 'completed' ) ? notes.filter(note => note.completed) : notes;
	
	currentNotes.sort((note1, note2) => note1.id > note2.id ? -1 : 1 )

	const getBody = () => {
		return currentNotes.length > 0 ? (
			currentNotes.map(note => 
				<Note text={note.text} isCompleted={note.completed}
				key={note.id} handleCompleted={handleCompleted}
				deleteNote={deleteNote}
				id={note.id}/>
			)
		) : (
			<div className="text-center border rounded">
				<p className="mt-3">notes not found</p>
			</div>
		)
	}
	
	return (
		<div className="row mt-1">
			<div className="col">
				{getBody()}
			</div>
		</div>
	)
}

ListOfNotes.propTypes = {
	notes: propTypes.array.isRequired,
	mainFilter: propTypes.string.isRequired,
	handleCompleted: propTypes.func.isRequired,
	deleteNote: propTypes.func.isRequired
}

const mapStateToProps = state => ({
	notes: notes(state),
	mainFilter: mainFilter(state)
});

const mapDispatchToProps = dispatch => ({
	handleCompleted: id => {
		dispatch(handleCompletedAction(id))
	},
	deleteNote: id => {
		dispatch(deleteNoteAction(id))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListOfNotes)