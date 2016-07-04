'use strict';

import React from 'react';

import {Button, Group} from 'planett-button';

export const component = (
  <Group>
    <Button>Buuton1</Button>
    <Button>Buuton2</Button>
    <Button>Buuton3</Button>
  </Group>
);

export const str = [
  'import {Button, Group} from \'planett-button\';',
  '',
  '<Group>',
  '  <Button>Buuton1</Button>',
  '  <Button>Buuton2</Button>',
  '  <Button>Buuton3</Button>',
  '</Group>'
];
