'use strict';

import React from 'react';

import Icon from 'planett-icon';
import Planett from 'planett-icon-planett';

export const component = (
  <div style={{width: '100%',
               height: '60px'}}
  >
    <Icon style={{color: 'red',
                  marginRight: '10px',
                  float: 'left'}}
          shape={'circle'}
    >
      <Planett />
    </Icon>

    <Icon style={{color: 'red',
                  marginRight: '10px',
                  float: 'left'}}
          shape={'circle'}
    >
      <Planett style={{fill: 'blue'}}/>
    </Icon>
  </div>
);

export const str = [
  '<Icon style={{color: \'red\'}}',
  '      shape={\'circle\'}',
  '>',
  '  <Planett />',
  '</Icon>',
  '',
  '',
  '<Icon style={{color: \'red\'}}',
  '      shape={\'circle\'}',
  '>',
  '  <Planett style={{fill: \'blue\'}}/>',
  '</Icon>'
];
