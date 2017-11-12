// @flow

import React from 'react';

type Props = {
  content: string
};

const P = (props: Props): any => (<p>{props.content}</p>);

P.defaultProps = {
  content: "This is default content of a paragraph tag"
};

export default P;
