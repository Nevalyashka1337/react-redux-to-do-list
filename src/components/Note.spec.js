import Note from './Note'
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { assert } from 'chai'

describe('Note component', () => {
	test('should button has class "btn-success" when completed', () => {
		const props = {
			text: 'buy milk',
			isCompleted: true,
			handleCompleted: () => {},
			id: new Date().getTime(),
			deleteNote: () => {}
		}
		const wrapper = shallow(<Note {...props}/>)
		const btn = wrapper.find('button.btn.btn-do')
		
		assert.isTrue(btn.hasClass('btn btn-do btn-success'))
		expect(toJson(wrapper)).toMatchSnapshot()
	})
})