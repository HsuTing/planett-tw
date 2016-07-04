'use strict';

import React from 'react';

import Example from './../example';
import Code from './../code';

import * as basic from './basic';
import * as title from './title';
import * as icon from './icon';

export default class InputPage extends React.Component {
  render() {
    return (
      <Example>
        <h1>Install</h1>
        <h5>{'- Install input'}</h5>
        <Code data={['npm install planett-input --save']} />
        <br/><br/><br/>

        <h1>Example</h1>

        <div title={'Basic'}
             data={basic}
        />

        <div title={'Add title'}
             subtitle={'Add `title` to children component. Only one component will be set as `title`.'}
             data={title}
        />

        <div title={'Add icon'}
             subtitle={'Add `icon` to children component. Only one component will be set as `icon`. You can also set `left` or `right` in `props`. `default` will set `left`.'}
             data={icon}
        />
      </Example>
    );
  }
};
