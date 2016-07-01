'use strict';

import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Menu from './menu';
import Button from './button_components/index';
import Circle from './circle_components/index';

export default class Root extends React.Component {
  render() {
    return (
      <Router history={ hashHistory }>
        <Route path='/' component={ Menu }>
          <IndexRoute component={ Button } />
          <Route path='Circle' component={ Circle }/>
          <Route path='*' component={ Button }/>
        </Route>
      </Router>
    )
  }
};
