/**
 * abstract parent component of complext Page Block Component
 */

import React, { Component, PropTypes } from 'react';

const propTypes = {
  background: PropTypes.string,
  spm: PropTypes.string
};

const defaultProps = {
  background: '#FFF'
};
class Widget extends Component {

}

Widget.propTypes = propTypes;
Widget.defaultProps = defaultProps;

export default Widget;
