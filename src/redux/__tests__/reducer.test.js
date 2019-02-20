import { expect } from 'chai'
import { addNewNoteAction, deleteNoteAction, changeFilterAction, handleCompletedAction } from '../actions'
import reducer, { initState } from '../reducer'

describe('reducer', () => {
	test('should return init state', () => {
		const state = reducer(initState, {})

		expect(state).to.equal(initState)
	})

	test('ADD_NOTE: should add two note', () => {
		const action_1 = addNewNoteAction('buy milk')

		const action_2 = addNewNoteAction('work! work! work!')

		const state_1 = reducer(initState, action_1)
		const state_2 = reducer(state_1, action_2)

		expect(state_2).to.deep.equal({
			...initState,
			notes: [action_1.payload, action_2.payload]
		})
	})

	test('DELETE_NOTE: should delete first note', () => {
		const action_1 = addNewNoteAction('buy milk')
		let action_2 = addNewNoteAction('work! work! work!')
		action_2.payload.id++
		const action_3 = deleteNoteAction(action_1.payload.id)

		const state_1 = reducer(initState, action_1)
		const state_2 = reducer(state_1, action_2)
		const state_3 = reducer(state_2, action_3)

		expect(state_3).to.deep.equal({
			...initState,
			notes: [action_2.payload]
		})

	})

	test('HANDLE_MAIN_FILTER: should handle mainFilter', () => {
		const action = changeFilterAction('active')
		
		const state = reducer(initState, action)
		
		expect(state).to.deep.equal({
			...initState,
			mainFilter: action.payload
		})
	})

	test('HANDLE_COMPLETED: should handle completed note', () => {
		const action_1 = addNewNoteAction('buy milk')
		const action_2 = handleCompletedAction(action_1.payload.id)

		const state_1 = reducer(initState, action_1)
		const state_2 = reducer(state_1, action_2)
		
		expect(state_2).to.deep.equal({
			...initState,
			notes: [
				{ ...action_1.payload, completed: true }
			]
		})
	})
})