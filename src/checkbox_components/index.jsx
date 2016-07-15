'use strict';

import React from 'react';

import Example from './../example';
import Code from './../code';

import * as basic from './basic';
import * as radio from './radio';
import * as changeStyle from './change-style';

export default class CheckboxPage extends React.Component {
  render() {
    return (
      <Example>
        <h1>Install</h1>
        <h5>{'- Install checkbox'}</h5>
        <Code data={['npm install planett-checkbox --save']} />
        <br/><br/><br/>

        <h1>Example</h1>

        <div title={'Basic'}
             data={basic}
        />

        <div title={'Radio'}
             subtitle={'You can do `checkbox` like `raio`. This is an example.'}
             data={radio}
        />

        <div title={'Change style'}
             data={changeStyle}
        />
      </Example>
    );
  }
};
