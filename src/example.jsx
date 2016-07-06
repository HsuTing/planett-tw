'use strict';

import React from 'react';
import Merge from 'merge';

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
            width: '100%'
          }
        },
        React.Children.map(this.props.children, (child, index) => {
          if(child.type === 'div' && child.props.notExample !== true) {
            const props = Merge({}, child.props);
            delete props.subtitle;
            delete props.title;
            delete props.data;
            delete props.code;

            return React.createElement('div', Merge(props, {
                style: {
                  margin: '20px 0px'
                }
              }),
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
                React.Children.map(this.__parse_subtitle__(child.props.subtitle), (child) => {
                  return child;
                })
              ),
              child.props.data.component,
              React.createElement(
                Code, {
                  data: child.props.data.str,
                  style: child.props.code !== undefined ? child.props.code : {}
                }
              ),
              <br/>,
              <br/>,
              <br/>
            );
          }

          if(child.type === 'h1') {
            return React.cloneElement(child, {
              style: Merge({
                borderBottom: '1px solid #ddd',
                paddingBottom: '10px',
                marginBottom: '50px'
              }, child.props.style)
            });
          }

          if(child.type === 'h6') {
            return React.cloneElement(child, {
                style: {
                  paddingBottom: '10px',
                  marginBottom: '50px'
                }
              },
              React.Children.map(this.__parse_subtitle__(child.props.children), (child) => {
                return child;
              })
            );
          }

          if(child.props.notExample) {
            let props = Merge({}, child.props);
            delete props.notExample;

            return React.createElement('div', props,
              React.Children.map(child.props.children, (child) => {
                return React.createElement('div', {
                    style: {
                      width: '150px',
                      height: '150px',
                      display: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      float: 'left'
                    }
                  },
                  React.createElement('div', null,
                    React.createElement('div', {
                      style: {
                        width: '150px',
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '15px 0px'
                      }
                    }, child),
                    React.createElement('div', {
                      style: {
                        width: '150px',
                        textAlign: 'center'
                      }
                    }, child.props.name)
                  )
                )
              })
            );
          }

          return child;
        })
      )
    );
  }

  __parse_subtitle__(text) {
    if(text !== undefined) {
      return text.split('`').map((subtext, index) => {
        if(index % 2 === 1) {
          return React.createElement(
            'code', {
              style: {
                background: '#eee',
                padding: '0.2em 0.5em'
              },
              dangerouslySetInnerHTML: {
                __html: subtext
              }
            }
          );
        }

        return React.createElement('span', {
          dangerouslySetInnerHTML: {
            __html: subtext
          }
        });
      });
    }

    return text;
  }
};
