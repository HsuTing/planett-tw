'use strict';

import React from 'react';

export default class Code extends React.Component {
  render() {
    return (
      <pre style={{overflow: 'auto',
                   margin: '20px 0px',
                   padding: '20px',
                   background: '#eee'}}
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
