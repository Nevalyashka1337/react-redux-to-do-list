import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { notes } from '../redux/selectors'

function Progress({ notes }) {
	
	const completedNotes = notes.reduce((sum, note) => {
		return note.completed ? sum + 1 : sum
	}, 0)
	
	let progress = Math.round(completedNotes * 100 / notes.length);
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
	notes: notes(state)
})

export default connect(mapStateToProps)(Progress)