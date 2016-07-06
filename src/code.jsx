'use strict';

import React from 'react';
import Merge from 'merge';

export default class Code extends React.Component {
  render() {
    return (
      <pre style={Merge({
                   overflow: 'auto',
                   margin: '20px 0px',
                   padding: '20px',
                   background: '#eee'
                 }, this.props.style)}
      >
        <code style={{wordSpacing: '2.5px'}}>
          {this.props.data.map((d, i) => {
            return (
              <span key={i}
              >{d + '\n'}</span>
            );
          })}
        </code>
      </pre>
    );
  }
};
