import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import P from '../components/P';

storiesOf('P', module)
  .add('with text', () => (
    <P content="Hello P"/>
  ))
  .add('with some emoji', () => (
    <P content="😀 😎 👍 💯"/>
  ));   
