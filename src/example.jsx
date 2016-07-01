'use strict';

import React from 'react';
import Code from './code';

export default class Example extends React.Component {
  render() {
    return React.createElement(
      'div', {
        style: {
          display: 'flex',
          justifyContent: 'center',
          padding: '20px'
        }
      },
      React.createElement(
        'div', {
          style: {
            maxWidth: '500px',
          }
        },
        React.Children.map(this.props.children, (child, index) => {
          if(child.type === 'div') {
            return React.cloneElement(child, {
                style: {
                  margin: '20px 0px'
                }
              },
              React.createElement(
                'h1', null,
                child.props.title
              ),
              React.createElement(
                'h5', {
                  style: {
                    lineHeight: '30px'
                  }
                },
                React.Children.map(this.__parse_subtitle__(child.props.subtitle), (child, index) => {
                  return child; 
                })
              ),
              child.props.data.component,
              React.createElement(
                Code, {
                  data: child.props.data.str
                }
              ),
              <br/>,
              <br/>,
              <br/>
            );
          }

          if(child.type === 'h1') {
            return React.cloneElement(child, {
              style: {
                borderBottom: '1px solid #ddd',
                paddingBottom: '10px',
                marginBottom: '50px'
              }
            });
          }

          return child;
        })
      )
    );
  }

  __parse_subtitle__(text) {
    if(text !== undefined) {
      return text.split('\'').map((subtext, index) => {
        if(index % 2 === 1) {
          return React.createElement(
            'code', {
              style: {
                background: '#eee',
                padding: '0.2em 0.5em'
              }
            },
            subtext
          );
        }

        return subtext;
      });
    }

    return text;
  }
};
