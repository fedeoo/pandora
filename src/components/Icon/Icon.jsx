import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './icon.scss';
const cx = classNames.bind(styles);

const propTypes = {
  type: PropTypes.string
};
class Icon extends Component {
  render() {
    let { type, className } = this.props;
    let classes = classNames(cx('icon', `icon-${type}`), {
      [className]: className
    });
    return <i  {...this.props} className={classes}></i>
  }
}
Icon.propTypes = propTypes;

export default Icon;
