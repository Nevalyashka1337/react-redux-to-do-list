import Filter from '../components/Filter'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
	mainFilter: state.mainFilter
});

const mapDispatchToProps = dispatch => ({
	changeFilter: filter => {
		dispatch({ type: 'HANDLE_MAIN_FILTER', payload: filter })
	}
})

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter)

export default FilterContainer
