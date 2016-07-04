'use strict';

import React from 'react';

import {Icon, Search, KeyboardArrowDown} from 'planett-icon';

export const component = (
  <Icon shape={'square'}>
    <Search />
    <KeyboardArrowDown transform={'translate(0, 9)'}
                       style={{fill: 'red'}}
    />
  </Icon>
);

export const str = [
  'import {Icon, Search, KeyboardArrowDown} from \'planett-icon\';',
  '',
  '<Icon shape={\'square\'}>',
  '  <Search />',
  '  <KeyboardArrowDown transform={\'translate(0, 9)\'}',
  '                     style={{fill: \'red\'}}',
  '  />',
  '</Icon>'
];
