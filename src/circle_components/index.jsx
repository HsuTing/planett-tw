'use strict';

import React from 'react';

import Example from './../example';
import Code from './../code';

import * as basic from './basic';
import * as changeStyle from './change-style';

export default class CirclePage extends React.Component {
  render() {
    return (
      <Example>
        <h1>Install</h1>
        <h5>{'- Install circle'}</h5>
        <Code data={['npm install planett-circle --save']} />
        <br/><br/><br/>

        <h1>Example</h1>

        <div title={'Basic'}
             subtitle={'`value` is needed.'}
             data={basic}
        />

        <div title={'Change style'}
             data={changeStyle}
        />
      </Example>
    );
  }
};
