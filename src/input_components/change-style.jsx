'use strict';

import React from 'react';

import Input from 'planett-input';
import Planett from 'planett-icon-planett';

export const component = (
  <div>
    <Input style={{border: '1px solid #eee'}}>
      <h4 style={{color: 'red'}}
          title
      >Title</h4>

      <Planett style={{fill: 'blue'}}
               icon
      />
    </Input>
  </div>
);

export const str = [
  '<Input style={{border: \'1px solid #eee\'}}>',
  '  <h4 style={{color: \'red\'}}',
  '      title',
  '  >Title</h4>',
  '',
  '  <Planett style={{fill: \'blue\'}}',
  '           icon',
  '  />',
  '</Input>'
];
