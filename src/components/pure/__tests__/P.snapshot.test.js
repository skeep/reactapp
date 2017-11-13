import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import P from '../index.js';

it('renders correctly content 1', () => {
  const tree = shallow(
    <P content="content 1" />
  );
  expect(toJson(tree)).toMatchSnapshot();
});

it('renders correctly content 2', () => {
  const tree = shallow(
    <P content="content 2" />
  );
  expect(toJson(tree)).toMatchSnapshot();
});
