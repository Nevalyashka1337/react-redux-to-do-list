import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import Note from './Note'

function ListOfNotes({ notes, mainFilter, handleCompleted, deleteNote }) {
	
	const currentNotes = ( mainFilter === 'active' ) ? notes.filter(note => !note.completed) :
		( mainFilter === 'completed' ) ? notes.filter(note => note.completed) : notes

	const onHandleCompleted = (id) => {
		handleCompleted(id)
	}

	const onDeleteNote = (id) => {
		deleteNote(id)
	}

	const getBody = () => {
		return currentNotes.length > 0 ? (
			currentNotes.map((note) => 
				<Note text={note.text} isCompleted={note.completed}
				key={note.id} handleCompleted={onHandleCompleted}
				deleteNote={onDeleteNote}
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
	notes: state.notes,
	mainFilter: state.mainFilter
});

const mapDispatchToProps = dispatch => ({
	handleCompleted: (id) => {
		dispatch({ type: 'HANDLE_COMPLETED', payload: id })
	},
	deleteNote: (id) => {
		dispatch({ type: 'DELETE_NOTE', payload: id })
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListOfNotes)