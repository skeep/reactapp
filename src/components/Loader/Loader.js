// @flow

import React from 'react'

type Props = {
  error: Error,
  timedOut: boolean,
  pastDelay: boolean
}

const Loader = (props: Props): any => {
  if (props.error) {
    return <div>Error!</div>
  } else if (props.timedOut) {
    return <div>Taking a long time...</div>
  } else if (props.pastDelay) {
    return <div>Loading...</div>
  } else {
    return null
  }
}

export default Loader
