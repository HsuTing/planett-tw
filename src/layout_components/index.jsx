'use strict';

import React from 'react';

import Example from './../example';
import Code from './../code';

import * as basic from './basic';
import * as changeTotal from './change-total';

export default class LayoutPage extends React.Component {
  render() {
    return (
      <Example>
        <h1>Install</h1>
        <h5>{'- Install layout'}</h5>
        <Code data={['npm install planett-layout --save']} />
        <br/><br/><br/>

        <h1>Example</h1>

        <div title={'Basic'}
             data={basic}
        />

        <div title={'Change total'}
             subtitle={'`default` total is `12`.'}
             data={changeTotal}
        />
      </Example>
    );
  }
};
