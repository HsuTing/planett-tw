'use strict';

import React from 'react';
import Merge from 'merge';

import Style from 'planett-style';
import Button from 'planett-button';
import ButtonGroup from 'planett-button-group';

const buttonName = {
  Button: 0,
  Circle: 1,
  Icon: 2
};

class Menu extends React.Component {
  render() {
    return (
      <div>
        <ButtonGroup default={this.props.location === undefined ?
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
        </ButtonGroup>

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
