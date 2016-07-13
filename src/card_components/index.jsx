'use strict';

import React from 'react';

import Example from './../example';
import Code from './../code';

import * as basic from './basic';

export default class CardPage extends React.Component {
  render() {
    return (
      <Example>
        <h1>Install</h1>
        <h5>{'- Install card'}</h5>
        <Code data={['npm install planett-card --save']} />
        <br/><br/><br/>

        <h1>Example</h1>

        <div title={'Basic'}
             data={basic}
        />
      </Example>
    );
  }
};
