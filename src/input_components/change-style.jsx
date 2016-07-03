'use strict';

import React from 'react';

import Input from 'planett-input';
import Planett from 'planett-icon-planett';

export const component = (
  <div>
    <Input style={{marginBottom: '20px'}}>
      <h4 style={{color: 'red'}}
          title
      >Title</h4>
    </Input>

    <Input style={{border: '1px solid #eee'}}>
      <Planett style={{fill: 'blue'}}
               icon
      />
    </Input>
  </div>
);

export const str = [
  '<Input>',
  '  <h4 style={{color: \'red\'}}',
  '      title',
  '  >Title</h4>',
  '</Input>',
  '',
  '',
  '<Input style={{border: \'1px solid #eee\'}}>',
  '  <Planett style={{fill: \'blue\'}}',
  '           icon',
  '  />',
  '</Input>'
];
