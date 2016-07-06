'use strict';

import React from 'react';

import * as Icon from 'planett-icon';

import Example from './../example';
import Code from './../code';

import * as basic from './basic';
import * as shape from './shape';
import * as ChangeColor from './change-color';
import * as multiple from './multiple';

export default class IconPage extends React.Component {
  render() {
    return (
      <Example>
        <h1>Install</h1>
        <h5>{'- Install icon'}</h5>
        <Code data={['npm install planett-icon --save']} />
        <br/><br/><br/>

        <h1 style={{margin: '0px'}}>Example</h1>
        <h6>Icon is a `svg` and every icon is a `g`. As a result, you need to control them like `svg` and `g`.</h6>

        <div title={'Basic'}
             data={basic}
        />

        <div title={'Add border'}
             data={shape}
        />

        <div title={'Change color'}
             data={ChangeColor}
        />

        <div title={'Multiple icon'}
             data={multiple}
        />

        <h1 style={{margin: '0px'}}>{'Icon list'}</h1>
        <div notExample>
          <Icon.Icon name={'Search'}><Icon.Search /></Icon.Icon>
          <Icon.Icon name={'KeyboardArrowDown'}><Icon.KeyboardArrowDown /></Icon.Icon>
        </div>
      </Example>
    );
  }
};
