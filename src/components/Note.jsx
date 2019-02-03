import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'


function Note({ text, isCompleted, handleCompleted, id, deleteNote }) {
	return (
		<div className="row mt-1">
			<div className="col d-flex justify-content-between align-items-stretch">
				<div>
					<button onClick={() => handleCompleted(id)} className={classNames('btn btn-do', { 'btn-success': isCompleted, 'btn-outline-warning': !isCompleted})}><ion-icon name="checkmark"></ion-icon></button>
				</div>
				<div className="border-top border-bottom p-1 px-3 flex-grow-1">{text}</div>
				<div>
					<button onClick={() => deleteNote(id)} className="btn btn-danger btn-del"><ion-icon name="trash"></ion-icon></button>
				</div>
			</div>
		</div>
	)
}

Note.propTypes = {
	text: propTypes.string.isRequired,
	isCompleted: propTypes.bool.isRequired,
	handleCompleted: propTypes.func.isRequired,
	deleteNote: propTypes.func.isRequired
}

export default Note