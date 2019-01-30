import React from 'react'

function note() {
	return (
		<div className="row mt-1">
			<div className="col d-flex justify-content-between align-items-stretch">
				<div>
					<button className="btn btn-do btn-success"><ion-icon name="checkmark"></ion-icon></button>
				</div>
				<div className="border-top border-bottom p-1 px-3 flex-grow-1">Lorem ipsum dolor sit amet.</div>
				<div>
					<button className="btn btn-danger btn-del"><ion-icon name="trash"></ion-icon></button>
				</div>
			</div>
		</div>
	)
}

export default note
