'use strict';

import React from 'react';
import Merge from 'merge';

import Card from 'planett-card';
import {Button} from 'planett-button';
import {
  Icon,
  Close
} from 'planett-icon';

import Style from 'planett-style';

export const component = (
  <Card>
    <div title>Title</div>

    <div menu>
      <Icon style={{cursor: 'pointer'}}>
        <Close style={{fill: 'black'}} />
      </Icon>
    </div>

    <div content>
      <Button style={{width: '100px',
                      borderRadius: '0px',
                      float: 'right'}}
      >Yes</Button>
    </div>
  </Card>
);

export const str = [
  'import Card from \'planett-card\';',
  'import {Icon, Closa} from \'planett-icon\';',
  'import {Button} from \'planett-button\';',
  '',
  '<Card>',
  '  <div title>Title</div>',
  '',
  '  <div menu>',
  '    <Icon style={{cursor: \'pointer\'}}>',
  '      <Close style={{fill: \'black\'}} />',
  '    </Icon>',
  '  </div>',
  '',
  '  <div content>',
  '    <Button style={{width: \'100px\',',
  '                    borderRadius: \'0px\',',
  '                    float: \'right\'}}',
  '    >Yes</Button>',
  '  </div>',
  '</Card>'
];
