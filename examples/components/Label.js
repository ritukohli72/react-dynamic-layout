import React from 'react';
import { register } from '../../src';

// NOTE: only for testing

function Label(props) {
  return <label>{props.text}</label>;
}

Label.displayName = 'Label';

module.exports = Label;

register(Label, 'Label');
