'use strict';

import React from 'react';

import Planett from 'planett-icon-planett';
import Place from 'planett-icon-the-place';

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

        <h1>Example</h1>

        <div title={'Basic'}
             subtitle={'`Planett` components is just an example. You can use other icons at `icon list` or use your icon. The type of `icons` is recommended to be a `svg`, and it will be given a `defaultColor` in `this.props.style`.'}
             data={basic}
        />

        <div title={'Add border'}
             data={shape}
        />

        <div title={'Change color'}
             subtitle={'Because `icon` is `svg`, you need to use `fill` to change color.'}
             data={ChangeColor}
        />

        <div title={'Multiple icon'}
             data={multiple}
        />

        <h1>Icon list</h1>

        <h5>{'- Planett'}</h5>
        <Planett style={{fill: 'black'}}/>
        <Code data={['npm install planett-icon-planett --save']} />

        <h5>{'- Place'}</h5>
        <Place style={{fill: 'black'}}/>
        <Code data={['npm install planett-icon-the-place --save']} />
      </Example>
    );
  }
};
