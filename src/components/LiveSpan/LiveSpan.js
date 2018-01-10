// @flow

import React from 'react'

type Props = {
  error: boolean,
  fetching: boolean,
  message: string,
  payload: Array<mixed>
}

const LiveSpan = (props: Props): any => {
  return (
    <span>
      <span>{props.payload}</span>
      <span>{props.message}</span>
    </span>
  )
}

LiveSpan.defaultProps = {
  error: false,
  fetching: false,
  message: null,
  payload: 'NA'
}

export default LiveSpan
