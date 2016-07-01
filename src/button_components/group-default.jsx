'use strict';

import React from 'react';

import Button from './../../../planett-button/packages/basic';
import ButtonGroup from './../../../planett-button/packages/group';

export const component = (
  <ButtonGroup default={1}>
    <Button>Buuton1</Button>
    <Button>Buuton2</Button>
    <Button>Buuton3</Button>
  </ButtonGroup>
);

export const str = [
  '<ButtonGroup default={1}>',
  '  <Button>Buuton1</Button>',
  '  <Button>Buuton2</Button>',
  '  <Button>Buuton3</Button>',
  '</ButtonGroup>'
];
