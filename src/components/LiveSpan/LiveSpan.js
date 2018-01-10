// @flow

import React from 'react'

type Props = {
  error: boolean,
  fetching: boolean,
  message: string,
  payload: Array
}

const LiveSpan = (props: Props): any => {
  return <span>{props.payload} <span>{props.message}</span></span>
}

LiveSpan.defaultProps = {
  error: false,
  fetching: false,
  message: null,
  payload: 'NA'
}

export default LiveSpan
