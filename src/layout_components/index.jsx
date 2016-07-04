'use strict';

import React from 'react';

import Planett from 'planett-icon-planett';
import Place from 'planett-icon-the-place';

import Example from './../example';
import Code from './../code';

import * as basic from './basic';
import * as changeTotal from './change-total';
import * as layout from './layout';

export default class LayoutPage extends React.Component {
  render() {
    return (
      <Example>
        <h1>Install</h1>
        <h5>{'- Install grid, cell'}</h5>
        <Code data={['npm install planett-grid planett-cell --save']} />
        <h5>{'- Install layout'}</h5>
        <Code data={['npm install planett-layout --save']} />
        <br/><br/><br/>

        <h1>Example</h1>

        <div title={'Basic'}
             data={basic}
        />

        <div title={'Change total'}
             subtitle={'`default` total is `12`.'}
             data={changeTotal}
        />

        <div title={'Layout'}
             subtitle={'You need to run `layout.run` in `componentDidMount`. `layout.run` can have three arguments. 1st argument is for `desktop size`, 2nd argument is for `tablet size` and 3rd argument is for `phone size`. `tablet size` is between 839 and 480. `phone size` is between 479 and 0. You also need to add `this.forceUpdate()` in each function to rerender components. Every `layout.style` will return new value to components. You can see <a href=\'https://www.npmjs.com/package/planett-layout\' target=\'_blank\' style=\'color: inherit;\'>here</a> to learn more.'}
             data={layout}
        />
      </Example>
    );
  }
};
