import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import P from '../index.js';

// Snapshot test
it('Snapshot test', () => {
  const tree = shallow(
    <P content="content 1" />
  );
  expect(toJson(tree)).toMatchSnapshot();
});

// Rendering test
it('Rendering test', ()=>{
  const tree = shallow(
    <P content="content 2" />
  );
  expect(tree.find('p').text()).toEqual('content 2');
});

// Behaviour tests

// Integration tests

// System tests
