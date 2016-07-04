'use strict';

import React from 'react';

import Circle from 'planett-circle';

export const component = (
  <Circle value={70}
          innerCircle={'ghostwhite'}
          outerCircle={'red'}
          line={'aquamarine'}
  />
);

export const str = [
  'import Circle from \'planett-circle\';',
  '',
  '<Circle value={70}',
  '        innerCircle={\'ghostwhite\'}',
  '        outerCircle={\'red\'}',
  '        line={\'aquamarine\'}',
  '/>'
];
