import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import Note from './Note'

function ListOfNotes(props) {
	const getBody = () => {
		return props.notes.length > 0 ? (
			props.notes.reverse().map((note) => 
				<Note text={note.text} isCompleted={note.completed}  key={note.id}/>
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
	notes: propTypes.array.isRequired
}

const mapStateToProps = state => ({
	notes: state.notes
})

export default connect(
	mapStateToProps
)(ListOfNotes)