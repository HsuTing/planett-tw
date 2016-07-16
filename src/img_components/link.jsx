'use strict';

import React from 'react';

import {Img} from 'planett-img';

export const component = (
  <Img src={'./public/favicons/favicon-96x96.png'}
       href={'https://www.google.com.tw'}
       target={'_blank'}
  />
);

export const str = [
  'import {Img} from \'planett-img\';',
  '',
  '<Img src={\'./public/favicons/favicon-96x96.png\'}',
  '     href={\'https://www.google.com.tw\'}',
  '     target={\'_blank\'}',
  '/>'
];
