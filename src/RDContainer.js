import React from 'react';

import { NumberOrString } from './types';

const obj = {};

obj.displayName = 'Container';

obj.propTypes = {
  size: NumberOrString.isRequired,
  tabs: React.PropTypes.bool
};

obj.getDefaultProps = () => ({
  tabs: true
});

obj.render = function render() {
  return <div></div>;
};


export default React.createClass(obj);
