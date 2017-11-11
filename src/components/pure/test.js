import React from 'react';
import P from './index.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <P content="content"/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
