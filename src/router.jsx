'use strict';

import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Menu from './menu';
import Button from './button_components/index';
import Circle from './circle_components/index';
import Icon from './icon_components/index';
import Img from './img_components/index';
import Input from './input_components/index';
import Layout from './layout_components/index';
import Table from './table_components/index';
import Select from './select_components/index';
import Card from './card_components/index';
import Checkbox from './checkbox_components/index';
import Accordion from './accordion_components/index';

export default class Root extends React.Component {
  render() {
    return (
      <Router history={ hashHistory }>
        <Route path='/' component={ Menu }>
          <IndexRoute component={ Button } />
          <Route path='Circle' component={ Circle }/>
          <Route path='Icon' component={ Icon }/>
          <Route path='Img' component={ Img }/>
          <Route path='Input' component={ Input }/>
          <Route path='Layout' component={ Layout }/>
          <Route path='Table' component={ Table }/>
          <Route path='Select' component={ Select }/>
          <Route path='Card' component={ Card }/>
          <Route path='Checkbox' component={ Checkbox }/>
          <Route path='Accordion' component={ Accordion }/>
          <Route path='*' component={ Button }/>
        </Route>
      </Router>
    )
  }
};
