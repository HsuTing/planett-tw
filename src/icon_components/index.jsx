'use strict';

import React from 'react';

import * as Icon from 'planett-icon';

import Example from './../example';
import Code from './../code';

import * as basic from './basic';
import * as shape from './shape';
import * as ChangeColor from './change-color';
import * as multiple from './multiple';

const listTitle = {
  margin: '60px 0px 0px',
  width: '100%',
  float: 'left'
};

export default class IconPage extends React.Component {
  render() {
    return (
      <Example>
        <h1>Install</h1>
        <h5>{'- Install icon'}</h5>
        <Code data={['npm install planett-icon --save']} />
        <h6>{'Most icons are from <a href=\'https://design.google.com/icons/\' target=\'_blank\'>Material icons</a>'}</h6>
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
        <p style={listTitle}>{'- Action'}</p>
        <div notExample>
          <Icon.Icon name={'Search'}><Icon.Search /></Icon.Icon>
        </div>

        <p style={listTitle}>{'- Hardware'}</p>
        <div notExample>
          <Icon.Icon name={'KeyboardArrowDown'}><Icon.KeyboardArrowDown /></Icon.Icon>
          <Icon.Icon name={'KeyboardArrowLeft'}><Icon.KeyboardArrowLeft /></Icon.Icon>
          <Icon.Icon name={'KeyboardArrowRight'}><Icon.KeyboardArrowRight /></Icon.Icon>
          <Icon.Icon name={'KeyboardArrowUp'}><Icon.KeyboardArrowUp /></Icon.Icon>
        </div>

        <p style={listTitle}>{'- Editor'}</p>
        <div notExample>
          <Icon.Icon name={'InsertLink'}><Icon.InsertLink /></Icon.Icon>
          <Icon.Icon name={'FormatQuote'}><Icon.FormatQuote /></Icon.Icon>
          <Icon.Icon name={'FormatIndentIncrease'}><Icon.FormatIndentIncrease /></Icon.Icon>
          <Icon.Icon name={'FormatIndentDecrease'}><Icon.FormatIndentDecrease /></Icon.Icon>
          <Icon.Icon name={'FormatBold'}><Icon.FormatBold /></Icon.Icon>
          <Icon.Icon name={'FormatAlignCenter'}><Icon.FormatAlignCenter /></Icon.Icon>
          <Icon.Icon name={'FormatAlignLeft'}><Icon.FormatAlignLeft /></Icon.Icon>
          <Icon.Icon name={'FormatAlignRight'}><Icon.FormatAlignRight /></Icon.Icon>
          <Icon.Icon name={'FormatH1'}><Icon.FormatH1 /></Icon.Icon>
          <Icon.Icon name={'FormatH2'}><Icon.FormatH2 /></Icon.Icon>
        </div>

        <p style={listTitle}>{'- Navigation'}</p>
        <div notExample>
          <Icon.Icon name={'Close'}><Icon.Close /></Icon.Icon>
          <Icon.Icon name={'Menu'}><Icon.Menu /></Icon.Icon>
        </div>

        <p style={listTitle}>{'- Content'}</p>
        <div notExample>
          <Icon.Icon name={'Add'}><Icon.Add /></Icon.Icon>
        </div>
      </Example>
    );
  }
};
