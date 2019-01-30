import React from 'react'
import propTypes from 'prop-types'


function Note({ text, isCompleted }) {
	let btnClass = 'btn btn-do ';
	if ( isCompleted ) {
		btnClass += 'btn-success'
	} else {
		btnClass += 'btn-outline-success'
	}
	return (
		<div className="row mt-1">
			<div className="col d-flex justify-content-between align-items-stretch">
				<div>
					<button className={btnClass}><ion-icon name="checkmark"></ion-icon></button>
				</div>
				<div className="border-top border-bottom p-1 px-3 flex-grow-1">{text}</div>
				<div>
					<button className="btn btn-danger btn-del"><ion-icon name="trash"></ion-icon></button>
				</div>
			</div>
		</div>
	)
}

Note.propTypes = {
	text: propTypes.string.isRequired,
	isCompleted: propTypes.bool.isRequired
}

export default Note