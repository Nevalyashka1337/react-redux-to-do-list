import { mainFilter, notes } from '../selectors'
import { initState } from '../reducer'
import { expect } from 'chai'

describe('Seceltors', () => {
	test('mainFilter', () => {
		expect(mainFilter(initState)).to.equal('all')
	})

	test('notes', () => {
		expect(notes(initState)).to.be.a('array').that.is.empty
	})
})