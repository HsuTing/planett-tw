'use strict';

import React from 'react';

import {Img, ButtonSlider} from 'planett-img';

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
    <ButtonSlider style={slider}>
      <Img src={'./public/img/img1.jpg'} />
      <Img src={'./public/img/img2.jpg'} onClick={ () => { alert('click'); } }/>
      <Img src={'./public/img/img3.jpg'} href={'https://planett-tw.github.io/'} target={'_blank'} />
    </ButtonSlider>

    <ButtonSlider style={slider}>
      <Img src={'./public/img/img1.jpg'} />
      <Img src={'./public/img/img2.jpg'} >
        <div style={{border: '1px solid red', background: 'white'}}
             clickedStyle={{background: 'black', width: '20px', height: '20px'}}
        ></div>
      </Img>
      <Img src={'./public/img/img3.jpg'} />
    </ButtonSlider>

    <ButtonSlider style={slider} bar={{left: '10px'}}>
      <Img src={'./public/img/img1.jpg'} />
      <Img src={'./public/img/img2.jpg'} />
      <Img src={'./public/img/img3.jpg'} />
    </ButtonSlider>
  </div>
);

export const str = [
  '<ButtonSlider style={slider}>',
  '  <Img src={\'./public/img/img1.jpg\'} />',
  '  <Img src={\'./public/img/img2.jpg\'} onClick={ () => { alert(\'click\'); } }/>',
  '  <Img src={\'./public/img/img3.jpg\'} href={\'https://planett-tw.github.io/\'} target={\'_blank\'} />',
  '</ButtonSlider>',
  '',
  '',
  '<ButtonSlider style={slider}>',
  '  <Img src={\'./public/img/img1.jpg\'} />',
  '  <Img src={\'./public/img/img2.jpg\'} >',
  '    <div style={{border: \'1px solid red\', background: \'white\'}}',
  '         clickedStyle={{background: \'black\', width: \'20px\', height: \'20px\'}}',
  '    ></div>',
  '  </Img>',
  '  <Img src={\'./public/img/img3.jpg\'} />',
  '</ButtonSlider>',
  '',
  '',
  '<ButtonSlider style={slider} bar={{left: \'10px\'}}>',
  '  <Img src={\'./public/img/img1.jpg\'} />',
  '  <Img src={\'./public/img/img2.jpg\'} />',
  '  <Img src={\'./public/img/img3.jpg\'} />',
  '</ButtonSlider>'
];
