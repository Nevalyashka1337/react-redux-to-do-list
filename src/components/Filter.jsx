import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'

function Filter(props) {
	let allTabClasses = 'btn btn-outline-primary'
	let activeTabClasses = 'btn btn-outline-warning'
	let completedTabClasses = 'btn btn-outline-success'
	
	switch (props.mainFilter) {
		case 'all':
			allTabClasses += ' active';
			break;
		case 'active':
		activeTabClasses += ' active';
			break;
		case 'completed':
		completedTabClasses += ' active';
			break;
		default:
			allTabClasses += ' active';
	}

	const onChangeFilter = (e) => {
		if ( e.target.name !== props.mainFilter ) {
			props.changeFilter(e.target.name)
		}
	}

	return (
		<div className="row mt-1">
			<div className="col">
				<div className="btn-group w-100" role="group" aria-label="Basic example">
					<button type="button" onClick={onChangeFilter} name="all" className={allTabClasses}>All</button>
					<button type="button" onClick={onChangeFilter} name="active" className={activeTabClasses}>Active</button>
					<button type="button" onClick={onChangeFilter} name="completed" className={completedTabClasses}>Completed</button>
				</div>
			</div>
		</div>
	)
}

Filter.propTypes = {
	mainFilter: propTypes.string.isRequired,
	changeFilter: propTypes.func.isRequired
}

const mapStateToProps = state => ({
	mainFilter: state.mainFilter
});

const mapDispatchToProps = dispatch => ({
	changeFilter: (filter) => {
		dispatch({ type: 'CHANGE_MAIN_FILTER', payload: filter })
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Filter)