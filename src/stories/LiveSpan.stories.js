import React from 'react'
import { storiesOf } from '@storybook/react'
import LiveSpan from '../components/LiveSpan/LiveSpan'

storiesOf('LiveSpan', module)
  .add('Default', () => <LiveSpan payload='content' />)
  .add('Fetching', () => <LiveSpan fetching message='fetching ...' />)
  .add('Error', () => <LiveSpan error message='error fetching ...' />)
