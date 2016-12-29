import React from 'react';
import { Layout, ROW, COLUMN, STACK, OPACITY } from '../src';
import './index.styl';
import './components/Label';

const config = {
  type: ROW,
  hiddenType: OPACITY,
  resize: false,
  floats: [{
    type: STACK,
    pos: { x: 300, y: 300 },
    size: { width: '100px', height: '200px' },
    children: [{
      component: 'Label',
      name: 'Float',
      props: { text: 'Float' }
    }, {
      component: 'Label',
      name: 'Float 2',
      props: { text: 'Float 2' }
    }]
  }, {
    type: COLUMN,
    pos: { x: 100, y: 100 },
    size: { width: '100px', height: '200px' },
    children: [{
      component: 'Label',
      name: 'Float',
      props: { text: 'Float' }
    }, {
      component: 'Label',
      name: 'Float 2',
      props: { text: 'Float 2' }
    }]
  }],
  children: [{
    component: 'Label',
    name: 'Menu',
    tabs: false,
    props: {
      text: 'Menu'
    },
    size: '25px'
  }, {
    type: COLUMN,
    tabs: false,
    name: 'body',
    size: 'calc(100% - 25px)',
    children: [{
      name: 'Left',
      type: STACK,
      tabs: false,
      props: {
        text: 'Left'
      },
      size: 15,
      active: 5,
      children: [{
        name: 'Frames',
        component: 'Label',
        props: {
          text: 'Frames'
        }
      }, {
        name: 'Layers',
        component: 'Label',
        props: {
          text: 'Layers'
        }
      }]
    }, {
      name: 'Center',
      type: ROW,
      tabs: false,
      resize: false,
      size: 70,
      children: [{
        name: 'Sprites',
        tabs: false,
        component: 'Label',
        props: {
          text: 'Sprites'
        },
        size: '20px'
      }, {
        name: 'Canvas',
        tabs: false,
        component: 'Label',
        props: {
          text: 'Canvas'
        },
        size: 'calc(100% - 20px)'
      }]
    }, {
      name: 'Right',
      size: 15,
      tabs: false,
      type: ROW,
      children: [{
        name: 'Right Top',
        component: 'Label',
        props: {
          text: 'Right Top'
        },
        size: 50
      }, {
        name: 'Right Bottom',
        component: 'Label',
        props: {
          text: 'Right Bottom'
        },
        size: 50
      }]
    }]
  }]
};

// config.resize = true;
// config.type = COLUMN;
// config.children = [{
//   name: 'Left',
//   component: 'Label',
//   props: {text: 'Left'},
//   size: 50
// }, {
//   name: 'Right',
//   size: 50,
//   tabs: false,
//   type: ROW,
//   children: [{
//     name: 'Right Top',
//     component: 'Label',
//     props: {text: 'Right Top'},
//     size: 50
//   }, {
//     name: 'Right Bottom',
//     component: 'Label',
//     props: {text: 'Right Bottom'},
//     size: 50
//   }]
// }];


export default () => < Layout {...config}/>;
