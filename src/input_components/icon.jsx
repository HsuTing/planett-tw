'use strict';

import React from 'react';

import Input from 'planett-input';
import {Icon, Search} from 'planett-icon';

export const component = (
  <div>
    <Input style={{marginBottom: '20px'}}>
      <Icon icon>
        <Search />
      </Icon>
    </Input>

    <Input style={{marginBottom: '20px'}}
           right
    >
      <Icon icon>
        <Search />
      </Icon>
    </Input>
  </div>
);

export const str = [
  'import Input from \'planett-input\';',
  'import {Icon, Search} from \'planett-icon\';',
  '',
  '<Input>',
  '  <Icon icon>',
  '    <Search />',
  '  </Icon>',
  '</Input>',
  '',
  '',
  '<Input right>',
  '  <Icon icon>',
  '    <Search />',
  '  </Icon>',
  '</Input>'
];
