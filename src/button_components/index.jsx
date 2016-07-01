'use strict';

import React from 'react';

import Example from './../example';
import Code from './../code';

import * as basic from './basic';
import * as changeStyle from './change-style';
import * as defaultClicked from './defaultClicked';
import * as disabled from './disabled';
import * as clicked from './clicked';
import * as inverted from './inverted';
import * as group from './group';
import * as groupDefault from './group-default';

export default class ButtonPage extends React.Component {
  render() {
    return (
      <Example>
        <h1>Install</h1>
        <h5>{'- Install button'}</h5>
        <Code data={['npm install planett-button --save']} />
        <h5>{'- Install button group'}</h5>
        <Code data={['npm install planett-button-group --save']} />
        <br/><br/><br/>

        <h1>Example</h1>

        <div title={'Basic'}
             data={basic}
        />

        <div title={'Change style'}
             data={changeStyle}
        />

        <div title={'Default clicked'}
             data={defaultClicked}
        />

        <div title={'Disabled'}
             data={disabled}
        />

        <div title={'Control clicked'}
             subtitle={'You can set \'clicked\' by yourself, but you must give a function \'onClick\'. Otherwise, you must use \'defaultClicked\'.'}
             data={clicked}
        />

        <div title={'Inverted'}
             data={inverted}
        />

        <div title={'Group'}
             data={group}
        />

        <div title={'Default group clicked'}
             subtitle={'\'default\' must be an integer. The buttons of \'group\' are an array. As a result, \'default\' starts from \'0\'.'}
             data={groupDefault}
        />
      </Example>
    );
  }
};
