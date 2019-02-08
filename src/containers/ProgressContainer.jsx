import Progress from '../components/Progress'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
	notes: state.notes
})

const ProgressContainer = connect(mapStateToProps)(Progress)

export default ProgressContainer
