import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewNote } from '../redux/actions'
import propTypes from 'prop-types'

class Add extends Component {
	state = {
		text: ''
	}

	addNote = (e) => {
		if ( e.key === 'Enter' ) {
			const { text } = this.state;
			if ( text.length > 0 ) {
				this.props.addNewNote(text)
				this.setState({ text: '' })
			}
		}
	}

	handleText = (e) => {
		this.setState({ text: e.target.value })
	}

	render() {
		return (
			<div className="row mt-2">
				<div className="col">
					<div className="input-group">
						<input value={this.state.text} onChange={this.handleText} onKeyPress={this.addNote}
						type="text" name="text" className="form-control" placeholder="write a note" />
					</div>
				</div>
			</div>
		)
	}
}

Add.propTypes = {
	addNewNote: propTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
	addNewNote: (text) => {
		dispatch(addNewNote(text))
	}
})

export default connect(
	null,
	mapDispatchToProps
)(Add)
