import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'

function Progress(props) {
	
	let allNotes = props.notes.length;
	let completedNotes = props.notes.filter(note => note.completed ? note : null )
	
	let progress = Math.round(completedNotes.length * 100 / allNotes);
	if ( isNaN(progress) ) progress = 0

	return (
		<div className="row mt-1">
			<div className="col">
				<div className="progress">
					<div className="progress-bar" role="progressbar" style={{ width: progress + '%' }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">{progress}%</div>
				</div>
			</div>
		</div>
	)
}

Progress.propTypes = {
	notes: propTypes.array.isRequired
}

const mapStateToProps = state => ({
	notes: state.notes
})

export default connect(
	mapStateToProps
)(Progress)
