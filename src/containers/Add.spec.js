import React from 'react'
import { Add } from './Add'
import { shallow } from 'enzyme'
import { assert } from 'chai'

describe('Add container', () => {
	
	test('should handle state from input', () => {
		const props = { addNewNote: jest.fn() }
		const component = shallow(<Add {...props}/>)
		const input = component.find('input')
		input.simulate('change', { target: { value: 'buy milk' } })
		
		assert.deepEqual(component.state(), { text: 'buy milk' })
	})

	test('should call addNewNote when exist state', () => {
		const props = { addNewNote: jest.fn() }
		const component = shallow(<Add {...props}/>)
		component.setState({ text: 'buy milk' })
		component.instance().addNote({ key: 'Enter' })

		expect(props.addNewNote).toBeCalledWith('buy milk')
	})

	test('should not call addNewNote when state is empty', () => {
		const props = { addNewNote: jest.fn() }
		const component = shallow(<Add {...props}/>)
		component.setState({ text: '' })
		component.instance().addNote({ key: 'Enter' })

		expect(props.addNewNote).toBeCalledTimes(0)
	})
})

