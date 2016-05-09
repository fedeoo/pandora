import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.scss';

const cx = classNames.bind(styles);

const propTypes = {
  type: PropTypes.string,
  size: PropTypes.oneOf(['xl', 'lg', 'sm']),
  text: PropTypes.string
};

const defaultProps = {
  text: 'button',
  type: 'default',
  onClick() {}
};

const prefixCls = 'btn';

class Button extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(...args) {
    this.props.onClick(...args);
  }
  render() {
    const { type, size, text, className } = this.props;
    const classes = cx({
      [prefixCls]: true,
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${size}`]: size,
      [className]: className
    });
    return (<button className={classes} onClick={this.handleClick}>{text}</button>);
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;
