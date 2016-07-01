'use strict';

import React from 'react';

import Button from 'planett-button';
import ButtonGroup from 'planett-button-group';

class Menu extends React.Component {
  render() {
    return (
      <div>
        <ButtonGroup>
        {['Button', 'Circle'].map((d, index) => {
          return (
            <Button key={index}
                    onClick={this.__click__.bind(this, d)}
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
