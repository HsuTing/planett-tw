'use strict';

import React from 'react';

import Checkbox from 'planett-checkbox';

export const component = (
  <div>
    <Checkbox name={'item'} value={'item1'}>item1</Checkbox>
    <Checkbox name={'item'} value={'item2'}>item2</Checkbox>
    <Checkbox name={'item'} value={'item3'}>item3</Checkbox>
  </div>
);

export const str = [
  'import Checkbox from \'planett-checkbox\';',
  '',
  '<Checkbox name={\'item\'} value={\'item1\'}>item1</Checkbox>',
  '<Checkbox name={\'item\'} value={\'item2\'}>item2</Checkbox>',
  '<Checkbox name={\'item\'} value={\'item3\'}>item3</Checkbox>'
];
