'use strict';

import React from 'react';

import {Grid, Cell} from 'planett-layout';

const style = {
  height: '50px',
  background: '#BDBDBD',
  border: '3px solid white',
  color: 'white',
  padding: '10px'
}

export const component = (
  <div>
    <Grid>
      {[4, 4, 4].map((d, i) => {
        return (
          <Cell key={i}
                col={d}
                style={style}
          >{d}</Cell>
        );
      })}
    </Grid>

    <Grid>
      {[4, 4, 4, 4].map((d, i) => {
        return (
          <Cell key={i}
                col={d}
                style={style}
                total={16}
          >{d}</Cell>
        );
      })}
    </Grid>
  </div>
);

export const str = [
  'import {Grid, Cell} from \'planett-layout\';',
  '',
  '<Grid>',
  '  <Cell col={4}>4</Cell>',
  '  <Cell col={4}>4</Cell>',
  '  <Cell col={4}>4</Cell>',
  '</Grid>',
  '',
  '',
  '<Grid>',
  '  <Cell col={4} total={16}>4</Cell>',
  '  <Cell col={4} total={16}>4</Cell>',
  '  <Cell col={4} total={16}>4</Cell>',
  '  <Cell col={4} total={16}>4</Cell>',
  '</Grid>'
];
