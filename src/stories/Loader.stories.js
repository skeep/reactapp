import React from 'react'
import { storiesOf } from '@storybook/react'
import Loader from '../components/Loader/Loader'

storiesOf('Loader', module)
  .add('Timed Out', () => <Loader timedOut />)
  .add('Passed default 200ms delay', () => <Loader pastDelay />)
