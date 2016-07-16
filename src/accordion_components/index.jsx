'use strict';

import React from 'react';

import Example from './../example';
import Code from './../code';

import * as basic from './basic';
import * as group from './group';

export default class AccordionPage extends React.Component {
  render() {
    return (
      <Example>
        <h1>Install</h1>
        <h5>{'- Install accordion'}</h5>
        <Code data={['npm install planett-accordion --save']} />
        <br/><br/><br/>

        <h1>Example</h1>

        <div title={'Basic'}
             data={basic}
        />

        <div title={'Group'}
             data={group}
        />
      </Example>
    );
  }
};
