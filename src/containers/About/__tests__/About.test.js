import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import About from '../About.js'

// Snapshot test
it('Snapshot test with content', () => {
  const tree = shallow(<About />)
  expect(toJson(tree)).toMatchSnapshot()
})

// Rendering test
it('Rendering test with content', () => {
  const tree = shallow(<About />)
  expect(tree.find('h2').text()).toEqual('About')
})

// Behaviour tests

// Integration tests

// System tests
