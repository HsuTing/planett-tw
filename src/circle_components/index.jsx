'use strict';

import React from 'react';

import Example from './../example';
import Code from './../code';

export default class CirclePage extends React.Component {
  render() {
    return (
      <Example>
        <h1>Install</h1>
        <h5>{'- Install circle'}</h5>
        <Code data={['npm install planett-circle --save']} />

        <h1>Example</h1>
      </Example>
    );
  }
};
