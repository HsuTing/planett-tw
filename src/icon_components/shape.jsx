'use strict';

import React from 'react';

import {Icon, Search} from 'planett-icon';

export const component = (
  <div style={{width: '100%',
               height: '60px'}}
  >
    <Icon shape={'circle'}
          style={{marginRight: '10px',
                  float: 'left'}}
    >
      <Search />
    </Icon>

    <Icon shape={'square'}
          style={{marginRight: '10px',
                  float: 'left'}}
    >
      <Search />
    </Icon>
  </div>
);

export const str = [
  'mport {Icon, Search} from \'planett-icon\';',
  '',
  '<Icon shape={\'circle\'}>',
  '  <Search />',
  '</Icon>',
  '',
  '',
  '<Icon shape={\'square\'}>',
  '  <Search />',
  '</Icon>'
];
