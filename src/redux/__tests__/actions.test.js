import { expect } from 'chai'
import * as ACTIONS from '../actions'

describe('Actions', () => {
	test('ADD_NOTE', () => {
		const text = 'some note'
		const action = ACTIONS.addNewNoteAction(text)
		expect(action).to.be.a('object')
		expect(action).to.have.property('type').that.to.equal('ADD_NOTE')
		expect(action).to.have.property('payload').that.to.be.a('object').that.to.have.property('text').that.to.equal(text)
	})

	test('HANDLE_MAIN_FILTER', () => {
		const filter = 'active'
		const action = ACTIONS.changeFilterAction(filter)
		expect(action).to.be.a('object')
		expect(action).to.have.property('type').that.to.equal('HANDLE_MAIN_FILTER')
		expect(action).to.have.property('payload').that.to.equal(filter)
	})

	test('HANDLE_COMPLETED', () => {
		const id = new Date().getTime()
		const action = ACTIONS.handleCompletedAction(id)
		expect(action).to.be.a('object')
		expect(action).to.have.property('type').that.to.equal('HANDLE_COMPLETED')
		expect(action).to.have.property('payload').that.to.equal(id)
	})

	test('DELETE_NOTE', () => {
		const id = new Date().getTime()
		const action = ACTIONS.deleteNoteAction(id)
		expect(action).to.be.a('object')
		expect(action).to.have.property('type').that.to.equal('DELETE_NOTE')
		expect(action).to.have.property('payload').that.to.equal(id)
	})
})