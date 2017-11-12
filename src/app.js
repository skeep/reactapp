import React, { Component } from 'react';
import { render } from 'react-dom';

import P from './components/pure';

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react
        <P content="hi"/>
        <P/>
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
