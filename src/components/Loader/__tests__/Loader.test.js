import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Loader from '../Loader.js'

// Snapshot test
it('Snapshot test with content', () => {
  const tree = shallow(<Loader />)
  expect(toJson(tree)).toMatchSnapshot()
})

it('Snapshot test pastDelay', () => {
  const tree = shallow(<Loader pastDelay />)
  expect(toJson(tree)).toMatchSnapshot()
})

it('Snapshot test timedOut', () => {
  const tree = shallow(<Loader timedOut />)
  expect(toJson(tree)).toMatchSnapshot()
})

// Rendering test

// Behaviour tests

// Integration tests

// System tests
