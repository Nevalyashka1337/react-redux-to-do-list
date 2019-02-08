import ListOfNotes from '../components/ListOfNotes'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
	notes: state.notes,
	mainFilter: state.mainFilter
});

const mapDispatchToProps = dispatch => ({
	handleCompleted: id => {
		dispatch({ type: 'HANDLE_COMPLETED', payload: id })
	},
	deleteNote: id => {
		dispatch({ type: 'DELETE_NOTE', payload: id })
	}
})

const ListOfNotesContainer = connect(mapStateToProps, mapDispatchToProps)(ListOfNotes)

export default ListOfNotesContainer
