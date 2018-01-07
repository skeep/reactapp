import React from 'react'
import { storiesOf } from '@storybook/react'
import P from '../components/P/P'

storiesOf('P', module)
  .add('with text', () => <P content='Hello P' />)
  .add('with some emoji', () => <P content='😀 😎 👍 💯' />)
