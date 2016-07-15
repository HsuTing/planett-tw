'use strict';

import React from 'react';

import Checkbox from 'planett-checkbox';

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [false, false, true],
      now: -1
    };
  }

  render() {
    return (
      <div>
        {this.state.checked.map((item, index) => {
          return (
            <Checkbox key={index}
                      name={'item'}
                      value={'item' + index}
                      defaultClicked={this.state.checked[index]}
                      checked={this.state.checked[index]}
                      onClick={this.__click__.bind(this, index)}
            >{'item' + index}</Checkbox>
          );
        })}
      </div>
    );
  }

  __click__(index) {
    let checked = this.state.checked.map((click, click_item) => {
      return index === click_item;
    });

    this.setState({now: index, checked: checked});
  }
};

export const component = (
  <Radio />
);

export const str = [
  'import Checkbox from \'planett-checkbox\';',
  '',
  'class Radio extends React.Component {',
  '  constructor(props) {',
  '    super(props);',
  '    this.state = {',
  '      checked: [false, false, true],',
  '      now: -1',
  '    };',
  '  }',
  '',
  '  render() {',
  '    return (',
  '      <div>',
  '        {this.state.checked.map((item, index) => {',
  '          return (',
  '            <Checkbox key={index}',
  '                      name={\'item\'}',
  '                      value={\'item\' + index}',
  '                      defaultClicked={this.state.checked[index]}',
  '                      checked={this.state.checked[index]}',
  '                      onClick={this.__click__.bind(this, index)}',
  '            >{\'item\' + index}</Checkbox>',
  '          );',
  '        })}',
  '      </div>',
  '    );',
  '  }',
  '',
  '  __click__(index) {',
  '    let checked = this.state.checked.map((click, click_item) => {',
  '      return index === click_item;',
  '    });',
  '',
  '    this.setState({now: index, checked: checked});',
  '  }',
  '};',
  '',
  '<Radio />'
];
