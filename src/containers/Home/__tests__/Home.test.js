import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Home from '../Home.js'

// Snapshot test
it('Snapshot test with content', () => {
  const tree = shallow(<Home />)
  expect(toJson(tree)).toMatchSnapshot()
})

// Rendering test
it('Rendering test with content', () => {
  const tree = shallow(<Home />)
  expect(tree.find('h2').text()).toEqual('Home')
})

// Behaviour tests

// Integration tests

// System tests
