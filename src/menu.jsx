'use strict';

import React from 'react';
import Merge from 'merge';

import Style from 'planett-style';
import {Button, Group} from 'planett-button';

const buttonName = {
  Button: 0,
  Circle: 1,
  Icon: 2,
  Img: 3,
  Input: 4,
  Layout: 5,
  Table: 6,
  Select: 7,
  Card: 8,
  Checkbox: 9,
  Accordion: 10
};

class Menu extends React.Component {
  render() {
    return (
      <div>
        <Group default={this.props.location === undefined ?
                               0 : (
                                 this.props.location.pathname === '/' ? 
                                 0 : (
                                   buttonName[ this.props.location.pathname.replace('/', '') ] === undefined ?
                                   0 :
                                   buttonName[ this.props.location.pathname.replace('/', '') ]
                                 )
                               )
                              }
                     style={{background: 'black'}}
        >
        {Object.keys(buttonName).map((d, index) => {
          return (
            <Button key={index}
                    style={{borderRadius: '0px',
                            border: '3px black solid',
                            background: 'black',
                            color: 'white'}}
                    clickedStyle={{background: 'white',
                                   color: 'black'}}
                    onClick={this.__click__.bind(this, d)}
                    inverted
            >{d}</Button>
          );
        })}
        </Group>

        {this.props.children}
      </div>
    );
  }

  __click__(name) {
    this.context.router.replace('/' + name);
  }
};

Menu.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Menu;
