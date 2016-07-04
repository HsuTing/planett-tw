'use strict';

import React from 'react';

import Table from 'planett-table';

export const component = (
  <Table>
    <thead>
      <tr>
        {['th 1', 'th 2', 'th 3'].map((th, index) => {
          return (
            <th key={index}>{th}</th>
          );
        })}
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
  'import Table from \'planett-table\';',
  '',
  '<Table>',
  '  <thead>',
  '    <tr>',
  '      <th>th 1</th>',
  '      <th>th 2</th>',
  '      <th>th 3</th>',
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
