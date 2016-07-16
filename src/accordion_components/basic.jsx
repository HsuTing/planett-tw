'use strict';

import React from 'react';

import {Accordion} from 'planett-accordion';

export const component = (
  <Accordion>
    <div title>title</div>
    <div content>content</div>
  </Accordion>
);

export const str = [
  'import {Accordion} from \'planett-accordion\';',
  '',
  '<Accordion>',
  '  <div title>title</div>',
  '  <div content>content</div>',
  '</Accordion>'
];
