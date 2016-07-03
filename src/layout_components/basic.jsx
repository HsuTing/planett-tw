'use strict';

import React from 'react';

import Grid from 'planett-grid';
import Cell from 'planett-cell';

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
      {[1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1].map((d, i) => {
        return (
          <Cell key={i}
                col={d}
                style={style}
          >{d}</Cell>
        );
      })}
    </Grid>

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
      {[6, 4, 2].map((d, i) => {
        return (
          <Cell key={i}
                col={d}
                style={style}
          >{d}</Cell>
        );
      })}
    </Grid>
  </div>
);

export const str = [
  '<Grid>',
  '  <Cell col={1}>1</Cell>',
  '  <Cell col={1}>1</Cell>',
  '  <Cell col={1}>1</Cell>',
  '  <Cell col={1}>1</Cell>',
  '  <Cell col={1}>1</Cell>',
  '  <Cell col={1}>1</Cell>',
  '  <Cell col={1}>1</Cell>',
  '  <Cell col={1}>1</Cell>',
  '  <Cell col={1}>1</Cell>',
  '  <Cell col={1}>1</Cell>',
  '  <Cell col={1}>1</Cell>',
  '  <Cell col={1}>1</Cell>',
  '</Grid>',
  '',
  '',
  '<Grid>',
  '  <Cell col={4}>4</Cell>',
  '  <Cell col={4}>4</Cell>',
  '  <Cell col={4}>4</Cell>',
  '</Grid>',
  '',
  '',
  '<Grid>',
  '  <Cell col={6}>6</Cell>',
  '  <Cell col={4}>4</Cell>',
  '  <Cell col={2}>2</Cell>',
  '</Grid>'
];
