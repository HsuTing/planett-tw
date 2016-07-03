'use strict';

import React from 'react';

import Input from 'planett-input';

export const component = (
  <div>
    <Input style={{marginBottom: '20px'}}>
      <h4 title>Title</h4>
    </Input>

    <Input>
      <div title>
        <h4 style={{margin: '0px'}}>Title</h4>
        <p style={{margin: '0px'}}>Subtitle</p>
      </div>
    </Input>
  </div>
);

export const str = [
  '<Input>',
  '  <h4 title>Title</h4>',
  '</Input>',
  '',
  '',
  '<Input>',
  '  <div title>',
  '    <h4>Title</h4>',
  '    <p>Subtitle</p>',
  '  </div>',
  '</Input>'
];
