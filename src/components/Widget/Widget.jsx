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

  onPropChange(name, event) {
    let { changeComponent, cid } = this.props;
    if (_.isFunction(changeComponent)) {
      let propName = name.replace(/[\[\.].*$/, ''); // get prop Name
      let oldData = _.pick(this.props, [propName]);
      let newData = _.set(oldData, name, event.target.value);
      changeComponent({
        cid: cid,
        data: newData
      });
    }
  }
  genetateStubEvent(value) {
    return {
      target: {
        value: value
      }
    };
  }
}

Widget.propTypes = propTypes;
Widget.defaultProps = defaultProps;

export default Widget;
