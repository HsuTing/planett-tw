'use strict';

import React from 'react';

import Button from './../../../planett-button/packages/basic';

export const component = (
  <Button style={{background: 'red'}}
          clickedStyle={{background: 'blue'}}
  >Change style</Button>
);

export const str = [
  '<Button style={{background: \'red\'}}',
  '        clickedStyle={{background: \'blue\'}}',
  '>Change style</Button>'
];
