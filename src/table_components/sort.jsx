'use strict';

import React from 'react';

import Table from 'planett-table';

export const component = (
  <Table sortable>
    <thead>
      <tr>
        <th sort>th 1</th>
        <th>th 2</th>
        <th sort={ (a, b, sort) => { if(a > b) return sort ? -1 : 1; else return sort ? 1 : -1; } }>th 3</th>
      </tr>
    </thead>

    <tbody>
      {['line 1', 'line 2'].map((tr, tr_index) => {
        return (
          <tr key={tr_index}>
            {['td 1', 'td 2', 'td 3'].map((td, td_index) => {
              return (
                <td key={td_index}>{tr + ' ' + td}</td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  </Table>
);

export const str = [
  '<Table sortable>',
  '  <thead>',
  '    <tr>',
  '      <th sort>th 1</th>',
  '      <th>th 2</th>',
  '      <th sort={ (a, b, sort) => { if(a > b) return sort ? -1 : 1; else return sort ? 1 : -1; } }>th 3</th>',
  '    </tr>',
  '  </thead>',
  '',
  '  <tbody>',
  '    <tr>',
  '      <td>line 1 td 1</td>',
  '      <td>line 1 td 2</td>',
  '      <td>line 1 td 3</td>',
  '    </tr>',
  '    <tr>',
  '      <td>line 2 td 1</td>',
  '      <td>line 2 td 2</td>',
  '      <td>line 2 td 3</td>',
  '    </tr>',
  '  </tbody>',
  '</Table>'
];
