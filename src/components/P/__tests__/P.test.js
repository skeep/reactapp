import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import P from '../index.js';

// Snapshot test
it('Snapshot test with content', () => {
  const tree = shallow(
    <P content='content 1' />
  );
  expect(toJson(tree)).toMatchSnapshot();
});

it('Snapshot test without content prop', () => {
  const tree = shallow(
    <P />
  );
  expect(toJson(tree)).toMatchSnapshot();
});

// Rendering test
it('Rendering test with content', ()=>{
  const tree = shallow(
    <P content='content 2' />
  );
  expect(tree.find('p').text()).toEqual('content 2');
});

it('Rendering test without content prop', ()=>{
  const tree = shallow(
    <P />
  );
  expect(tree.find('p').text()).toEqual('This is default content of a paragraph tag');
});

// Behaviour tests

// Integration tests

// System tests
