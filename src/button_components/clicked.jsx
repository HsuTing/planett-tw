'use strict';

import React from 'react';

import Button from 'planett-button';

export const component = (
  <Button onClick={ () => { alert('click') } }
          clicked={true}
  >Clicked</Button>
);

export const str = [
  '<Button onClick={ () => { alert(\'click\') } }',
  '        clicked={true}',
  '>Clicked</Button>'
];
