import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import Note from './Note'

function ListOfNotes(props) {

	const onHandleCompleted = (id) => {
		props.handleCompleted(id)
	}

	const onDeleteNote = (id) => {
		props.deleteNote(id)
	}

	const getBody = () => {
		return props.notes.length > 0 ? (
			props.notes.map((note) => 
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
	handleCompleted: propTypes.func.isRequired,
	deleteNote: propTypes.func.isRequired
}

const mapStateToProps = state => ({
	notes: state.notes
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