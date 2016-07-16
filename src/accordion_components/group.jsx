'use strict';

import React from 'react';

import {Accordion, Group} from 'planett-accordion';

export const component = (
  <div>
    <Group>
      <Accordion>
        <div title>title</div>
        <div content>content</div>
      </Accordion>

      <Accordion>
        <div title>title1</div>
        <div content>content1</div>
      </Accordion>
    </Group>

    <br/><br/>

    <Group default={0}>
      <Accordion>
        <div title>title</div>
        <div content>content</div>
      </Accordion>

      <Accordion>
        <div title>title1</div>
        <div content>content1</div>
      </Accordion>
    </Group>
  </div>
);

export const str = [
  'import Accordion from \'planett-accordion\';',
  '',
  '<Group>',
  '  <Accordion>',
  '    <div title>title</div>',
  '    <div content>content</div>',
  '  </Accordion>',
  '',
  '  <Accordion>',
  '    <div title>title1</div>',
  '    <div content>content1</div>',
  '  </Accordion>',
  '</Group>',
  '',
  '',
  '<Group default={0}>',
  '  <Accordion>',
  '    <div title>title</div>',
  '    <div content>content</div>',
  '  </Accordion>',
  '',
  '  <Accordion>',
  '    <div title>title1</div>',
  '    <div content>content1</div>',
  '  </Accordion>',
  '</Group>'
];
