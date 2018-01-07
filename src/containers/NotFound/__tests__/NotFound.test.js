import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import NotFound from '../NotFound.js'

// Snapshot test
it('Snapshot test with content', () => {
  const tree = shallow(<NotFound />)
  expect(toJson(tree)).toMatchSnapshot()
})

// Rendering test
it('Rendering test with content', () => {
  const tree = shallow(<NotFound />)
  expect(tree.find('h2').text()).toEqual('Not Found')
})

// Behaviour tests

// Integration tests

// System tests
