/**
 * abstract parent component of complext Page Block Component
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeComponent } from '../../actions';

const propTypes = {
  background: PropTypes.string,
  spm: PropTypes.string
};

const defaultProps = {
  background: '#FFF'
};
class Widget extends Component {
  constructor() {
    super();
    this.onPropertyChange = this.onPropertyChange.bind(this);
  }
  onPropertyChange(name, event) {
    let { changeComponent, cid } = this.props;
    console.log('change property...');
    if (_.isFunction(changeComponent)) {
      changeComponent({
        cid: cid,
        data: {
          [name]: event.target.value
        }
      });
    }
  }
}

Widget.propTypes = propTypes;
Widget.defaultProps = defaultProps;

export default Widget;
