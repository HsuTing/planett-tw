'use strict';

import React from 'react';

import Input from 'planett-input';
import Planett from 'planett-icon-planett';

export const component = (
  <div>
    <Input style={{marginBottom: '20px'}}>
      <Planett icon />
    </Input>

    <Input style={{marginBottom: '20px',
                   paddingLeft: '80px'}}
    >
      <div style={{width: '80px',
                   height: '40px'}}
           icon
      >
        <Planett style={{width: '40px',
                         height: '40px'}}
        />
        <Planett style={{width: '40px',
                         height: '40px'}}
        />
      </div>
    </Input>

    <Input style={{marginBottom: '20px'}}
           right
    >
      <Planett icon />
    </Input>

    <Input style={{marginBottom: '20px',
                   paddingRight: '80px'}}
           right
    >
      <div style={{width: '80px',
                   height: '40px',
                   position: 'relative',
                   left: '-40px'}}
           icon
      >
        <Planett style={{width: '40px',
                         height: '40px'}}
        />
        <Planett style={{width: '40px',
                         height: '40px'}}
        />
      </div>
    </Input>
  </div>
);

export const str = [
  '<Input>',
  '  <Planett icon />',
  '</Input>',
  '',
  '',
  '<Input style={{paddingLeft: \'80px\'}}>',
  '  <div style={{width: \'80px\',',
  '               height: \'40px\'}}',
  '       icon',
  '  >',
  '    <Planett style={{width: \'40px\',',
  '                     height: \'40px\'}}',
  '    />',
  '    <Planett style={{width: \'40px\',',
  '                     height: \'40px\'}}',
  '    />',
  '  </div>',
  '</Input>',
  '',
  '',
  '<Input right>',
  '  <Planett icon />',
  '</Input>',
  '',
  '',
  '<Input style={{paddingRight: \'80px\'}}',
  '       right',
  '>',
  '  <div style={{width: \'80px\',',
  '               height: \'40px\',',
  '               position: \'relative\',',
  '               left: \'-40px\'}}',
  '       icon',
  '  >',
  '    <Planett style={{width: \'40px\',',
  '                     height: \'40px\'}}',
  '    />',
  '    <Planett style={{width: \'40px\',',
  '                     height: \'40px\'}}',
  '    />',
  '  </div>',
  '</Input>',
];
