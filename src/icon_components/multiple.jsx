'use strict';

import React from 'react';

import Icon from 'planett-icon';
import Planett from 'planett-icon-planett';
import Place from 'planett-icon-the-place';

export const component = (
  <Icon shape={'square'}>
    <Planett style={{position: 'relative',
                     top: 'calc(-50px / 4)',
                     left: 'calc(50px / 4)'}}
    />
    <Place style={{position: 'relative',
                   top: 'calc(-100% + 50px / 4)',
                   left: 'calc(-50px / 4)'}}
    />
  </Icon>
);

export const str = [
  '<Icon>',
  '  <Planett style={{position: \'relative\',',
  '                   top: \'calc(-50px / 4)\',',
  '                   left: \'calc(50px / 4)\'}}',
  '  />',
  '  <Place style={{position: \'relative\',',
  '                 top: \'calc(-100% + 50px / 4)\',',
  '                 left: \'calc(-50px / 4)\'}}',
  '  />',
  '</Icon>'
];
