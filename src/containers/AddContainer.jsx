import Add from '../components/Add'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => ({
	addNewNote: text => {
		dispatch({ type: 'ADD_NOTE', payload: {
				id: new Date().getTime(),
				completed: false,
				text
			}
		})
	}
})

const AddContainer = connect(null, mapDispatchToProps)(Add)

export default AddContainer
