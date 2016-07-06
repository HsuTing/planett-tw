'use strict';

import React from 'react';

import Select from 'planett-select';

export const component = (
  <Select>
    <option>1</option>
    <option>2</option>
    <option>3</option>
  </Select>
);

export const str = [
  'import Select from \'planett-select\';',
  '',
  '<Select>',
  '  <option>1</option>',
  '  <option>2</option>',
  '  <option>3</option>',
  '</Select>'
];
