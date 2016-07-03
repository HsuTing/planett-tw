'use strict';

import React from 'react';

import Layout from 'planett-layout';

class Example extends React.Component {
  componentDidMount() {
    Layout.run(() => {
      this.forceUpdate();
    });
  }

  render() {
    return (
      <div>
        <div style={{background: Layout.style('red', 'white', 'blue'), width: '100%', height: '20px', border: '1px solid black'}}></div>
        <div style={{background: Layout.style('#eee', null, 'blanchedalmond'), width: '100%', height: '20px', border: '1px solid black'}}></div>
        <div style={{background: Layout.style('yellow', 'pink'), width: '100%', height: '20px', border: '1px solid black'}}></div>
      </div>
    );
  }
};

export const component = (
  <Example />
);

export const str = [
  'class Example extends React.Component {',
  '  componentDidMount() {',
  '    Layout.run(() => {',
  '      this.forceUpdate();',
  '    });',
  '  }',
  '',
  '',
  '  render() {',
  '    return (',
  '      <div>',
  '        <div style={{background: Layout.style(\'red\', \'white\', \'blue\')}}></div>',
  '        <div style={{background: Layout.style(\'#eee\', null, \'blanchedalmond\')}}></div>',
  '        <div style={{background: Layout.style(\'yellow\', \'pink\')}}></div>',
  '      </div>',
  '    );',
  '  }',
  '};'
];
