'use strict';

import React from 'react';

import Example from './../example';
import Code from './../code';

import * as basic from './basic';
import * as defaultValue from './default-value';
import * as addIcon from './add-icon';
import * as change from './change';
import * as show from './show';

export default class TablePage extends React.Component {
  render() {
    return (
      <Example>
        <h1>Install</h1>
        <h5>{'- Install select'}</h5>
        <Code data={['npm install planett-select --save']} />
        <br/><br/><br/>

        <h1>Example</h1>

        <div title={'Basic'}
             data={basic}
        />

        <div title={'Default value'}
             subtitle={'`defaultValue` also can be a react component. If you use a component, you need to add `data` to your component.'}
             data={defaultValue}
        />

        <div title={'Default select'}
             subtitle={'You can make how you show your data in `Select`, but you need to add a component which has `value`. It will be replace with choosing component.'}
             data={addIcon}
        />

        <div title={'Get value'}
             data={change}
        />

        <div title={'Always show select'}
             data={show}
             code={{marginTop: '120px'}}
        />
      </Example>
    );
  }
};
