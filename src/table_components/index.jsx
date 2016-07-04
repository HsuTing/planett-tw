'use strict';

import React from 'react';

import Planett from 'planett-icon-planett';
import Place from 'planett-icon-the-place';

import Example from './../example';
import Code from './../code';

import * as basic from './basic';
import * as sort from './sort';

export default class TablePage extends React.Component {
  render() {
    return (
      <Example>
        <h1>Install</h1>
        <h5>{'- Install table'}</h5>
        <Code data={['npm install planett-table --save']} />
        <br/><br/><br/>

        <h1>Example</h1>

        <div title={'Basic'}
             data={basic}
        />

        <div title={'Sort'}
             subtitle={'Add `sortable` in `Table` and add `sort` to `th` whose row need to sort. You also can wirte a function to `sort`.'}
             data={sort}
        />
      </Example>
    );
  }
};
