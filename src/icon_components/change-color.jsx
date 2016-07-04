'use strict';

import React from 'react';

import {Icon, Search} from 'planett-icon';

export const component = (
  <div style={{width: '100%',
               height: '30px'}}
  >
    <Icon style={{borderColor: 'red',
                  marginRight: '10px',
                  float: 'left'}}
          shape={'circle'}
    >
      <Search />
    </Icon>

    <Icon style={{borderColor: 'red',
                  marginRight: '10px',
                  float: 'left'}}
          shape={'circle'}
    >
      <Search style={{fill: 'blue'}}/>
    </Icon>
  </div>
);

export const str = [
  'import {Icon, Search} from \'planett-icon\';',
  '',
  '<Icon style={{borderColor: \'red\'}}',
  '      shape={\'circle\'}',
  '>',
  '  <Search />',
  '</Icon>',
  '',
  '',
  '<Icon style={{borderColor: \'red\'}}',
  '      shape={\'circle\'}',
  '>',
  '  <Search style={{fill: \'blue\'}}/>',
  '</Icon>'
];
