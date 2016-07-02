'use strict';

import React from 'react';

import Icon from 'planett-icon';
import Planett from 'planett-icon-planett';

export const component = (
  <div style={{width: '100%',
               height: '60px'}}
  >
    <Icon shape={'circle'}
          style={{marginRight: '10px',
                  float: 'left'}}
    >
      <Planett />
    </Icon>

    <Icon shape={'square'}
          style={{marginRight: '10px',
                  float: 'left'}}
    >
      <Planett />
    </Icon>
  </div>
);

export const str = [
  '<Icon shape={\'circle\'}>',
  '  <Planett />',
  '</Icon>',
  '',
  '',
  '<Icon shape={\'square\'}>',
  '  <Planett />',
  '</Icon>'
];
