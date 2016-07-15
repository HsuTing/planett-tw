'use strict';

import React from 'react';

import Checkbox from 'planett-checkbox';

export const component = (
  <div>
    <Checkbox name={'item'} value={'item1'}
              style={{borderRadius: '0px'}}
    >item1</Checkbox>
    <Checkbox name={'item'} value={'item2'}>item2</Checkbox>
    <Checkbox name={'item'} value={'item3'}>
      <font style={{color: 'red'}}>item3</font>
    </Checkbox>
  </div>
);

export const str = [
  'import Checkbox from \'planett-checkbox\';',
  '',
  '<Checkbox name={\'item\'} value={\'item1\'}',
  '              style={{borderRadius: \'0px\'}}',
  '>item1</Checkbox>',
  '<Checkbox name={\'item\'} value={\'item2\'}>item2</Checkbox>',
  '<Checkbox name={\'item\'} value={\'item3\'}>',
  '  <font style={{color: \'red\'}}>item3</font>',
  '</Checkbox>'
];
