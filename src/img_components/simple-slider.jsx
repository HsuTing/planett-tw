'use strict';

import React from 'react';

import {Img, SimpleSlider} from 'planett-img';
import {Icon, Search, Add} from 'planett-icon';

const slider = {
  width: '300px',
  border: '1px black solid',
  margin: '10px'
};

export const component = (
  <div style={{display: 'flex',
               flexFlow: 'row wrap',
               alignItems: 'stretch'}}
  >
    <SimpleSlider style={slider}>
      <Img src={'./public/img/img1.jpg'} />
      <Img src={'./public/img/img2.jpg'} />
      <Img src={'./public/img/img3.jpg'} href={'https://planett-tw.github.io/'} target={'_blank'} />
    </SimpleSlider>

    <SimpleSlider style={slider} col={2}>
      <Img src={'./public/img/img1.jpg'} />
      <Img src={'./public/img/img2.jpg'} />
      <Img src={'./public/img/img3.jpg'} />
    </SimpleSlider>

    <SimpleSlider style={slider}>
      <Img src={'./public/img/img1.jpg'} />
      <div style={{position: 'relative'}}>
        <Img src={'./public/img/img2.jpg'}
             style={{width: '100%'}}
        />

        <Icon style={{position: 'absolute',
                      top: 'calc(50% - 12px)',
                      left: 'calc(50% - 12px)'}}
        ><Search style={{fill: 'white'}}/></Icon>

        <Img src={'./public/img/img2.jpg'}
             style={{width: '100%'}}
             main
        />
      </div>
      <div style={{position: 'relative'}}>
        <Img src={'./public/img/img3.jpg'}
             style={{width: '100%'}}
        />

        <Icon style={{position: 'absolute',
                      top: 'calc(50% - 12px)',
                      left: 'calc(50% - 12px)'}}
        ><Search style={{fill: 'white'}}/></Icon>
      </div>
    </SimpleSlider>

    <SimpleSlider style={slider}>
      <Img src={'./public/img/img1.jpg'} />
      <Img src={'./public/img/img2.jpg'} />
      <img src={'./public/img/img3.jpg'} />
      <Icon notShow
           onClick={ () => { alert('You can use this to add picture.') } }
           style={{height: '80px', background: 'gainsboro'}}
      ><Add style={{fill: 'white'}} /></Icon>
    </SimpleSlider>
  </div>
);

export const str = [
  'import {Img, SimpleSilder} from \'planett-img\';',
  'import {Icon, Search, Add} from \'planett-icon\';',
  '',
  '<SimpleSlider>',
  '  <Img src={\'./public/img/img1.jpg\'} />',
  '  <Img src={\'./public/img/img2.jpg\'} />',
  '  <Img src={\'./public/img/img3.jpg\'} href={\'https://planett-tw.github.io/\'} target={\'_blank\'} />',
  '</SimpleSlider>',
  '',
  '',
  '<SimpleSlider col={2}>',
  '  <Img src={\'./public/img/img1.jpg\'} />',
  '  <Img src={\'./public/img/img2.jpg\'} />',
  '  <Img src={\'./public/img/img3.jpg\'} />',
  '</SimpleSlider>',
  '',
  '',
  '<SimpleSlider>',
  '  <Img src={\'./public/img/img1.jpg\'} />',
  '  <div style={{position: \'relative\'}}>',
  '    <Img src={\'./public/img/img2.jpg\'}',
  '         style={{width: \'100%\'}}',
  '    />',
  '',
  '    <Icon style={{position: \'absolute\',',
  '                  top: \'calc(50% - 12px)\',',
  '                  left: \'calc(50% - 12px)\'}}',
  '    ><Search style={{fill: \'white\'}}/></Icon>',
  '',
  '    <Img src={\'./public/img/img2.jpg\'}',
  '         style={{width: \'100%\'}}',
  '         main',
  '    />',
  '  </div>',
  '  <div style={{position: \'relative\'}}>',
  '    <Img src={\'./public/img/img3.jpg\'}',
  '         style={{width: \'100%\'}}',
  '    />',
  '',
  '    <Icon style={{position: \'absolute\',',
  '                  top: \'calc(50% - 12px)\',',
  '                  left: \'calc(50% - 12px)\'}}',
  '    ><Search style={{fill: \'white\'}}/></Icon>',
  '  </div>',
  '</SimpleSlider>',
  '',
  '',
  '<SimpleSlider>',
  '  <Img src={\'./public/img/img1.jpg\'} />',
  '  <Img src={\'./public/img/img2.jpg\'} />',
  '  <img src={\'./public/img/img3.jpg\'} />',
  '  <Icon notShow',
  '       onClick={ () => { alert(\'You can use this to add picture.\') } }',
  '       style={{height: \'80px\', background: \'gainsboro\'}}',
  '  ><Add style={{fill: \'white\'}} /></Icon>',
  '<SimpleSlider>'
];
