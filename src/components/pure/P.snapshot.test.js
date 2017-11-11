import React from 'react';
import P from './index.js';
import renderer from 'react-test-renderer';

it('renders correctly content 1', () => {
  const tree = renderer.create(
    <P content="content 1"/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly content 2', () => {
  const tree = renderer.create(
    <P content="content 2"/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
