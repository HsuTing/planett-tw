'use strict';

import React from 'react';

import Example from './../example';
import Code from './../code';

import * as basic from './basic';
import * as link from './link';
import * as simpleSlider from './simple-slider';

export default class ImgPage extends React.Component {
  render() {
    return (
      <Example>
        <h1>Install</h1>
        <h5>{'- Install img'}</h5>
        <Code data={['npm install planett-img --save']} />
        <br/><br/><br/>

        <h1>Example</h1>

        <div title={'Basic'}
             data={basic}
        />

        <div title={'Link'}
             data={link}
        />

        <div title={'Simple slider'}
             subtitle={'If you need to use link, you must let `a` to be `parentNode`. You can add `col` to change how many small picture show in one line. You can also add `main` to `childNode` in order to change how the big picture show. If you add `notShow` to `childNode`, this `DOM` will not be shown when user clicks.'}
             data={simpleSlider}
        />
      </Example>
    );
  }
};
