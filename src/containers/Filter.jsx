import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { changeFilterAction } from 'Redux/actions'
import { mainFilter } from 'Redux/selectors'

function Filter({ mainFilter, changeFilter }) {
	
	const onChangeFilter = ({ target }) => {
		if ( target.name !== mainFilter ) changeFilter(target.name)
	}

	return (
		<div className="row mt-1">
			<div className="col">
				<div className="btn-group w-100" role="group" aria-label="Basic example">
					<button type="button" onClick={onChangeFilter}name="all"
					className={classNames('btn btn-outline-primary', { active: mainFilter === 'all' })}>All</button>
					<button type="button" onClick={onChangeFilter} name="active"
					className={classNames('btn btn-outline-warning', { active: mainFilter === 'active' })}>Active</button>
					<button type="button" onClick={onChangeFilter} name="completed"
					className={classNames('btn btn-outline-success', { active: mainFilter === 'completed' })}>Completed</button>
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
	mainFilter: mainFilter(state)
});

const mapDispatchToProps = dispatch => ({
	changeFilter: filter => {
		dispatch(changeFilterAction(filter))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Filter)