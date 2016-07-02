'use strict';

import React from 'react';

import Icon from 'planett-icon';
import Planett from 'planett-icon-planett';

export const component = (
  <Icon style={{color: 'red'}}
        shape={'circle'}
  >
    <Planett style={{fill: 'blue'}}/>
  </Icon>
);

export const str = [
  '<Icon style={{color: \'red\'}}',
  '      shape={\'circle\'}',
  '>',
  '  <Planett style={{fill: \'blue\'}}/>',
  '</Icon>'
];
