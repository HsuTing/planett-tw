'use strict';

import React from 'react';

import Select from 'planett-select';
import {Icon, Search, KeyboardArrowDown} from 'planett-icon';

const defaultSelect = (
  <div>
    <div value style={{float: 'left'}}/>
    <Icon style={{float: 'right'}}>
      <KeyboardArrowDown />
    </Icon>
  </div>
);

export const component = (
  <Select default={defaultSelect}>
    <option data={'1'}>
      <Icon style={{float: 'left'}}><Search/></Icon>1
    </option>
    <option>2</option>
    <option>3</option>
  </Select>
);

export const str = [
  'import Select from \'planett-select\';',
  'import {Icon, KeyboardArrowDown} from \'planett-icon\';',
  '',
  'const defaultSelect = (',
  '  <div>',
  '    <div value style={{float: \'left\'}}/>',
  '    <Icon style={{float: \'right\'}}>',
  '      <KeyboardArrowDown />',
  '    </Icon>',
  '  </div>',
  ');',
  '',
  '<Select default={defaultSelect}>',
  '  <option data={\'1\'}>',
  '    <Icon style={{float: \'left\'}}><Search/></Icon>1',
  '  </option>',
  '  <option>2</option>',
  '  <option>3</option>',
  '</Select>'
];
