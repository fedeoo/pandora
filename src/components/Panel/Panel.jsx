import React, {Component} from 'react';
import styles from './panel.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class Panel extends Component {

  render () {
    let {
      children,
      className = '',
      heading,
      style,
      ...other,
    } = this.props;
    const classes = classNames(cx('panel'), className);
    return (
      <div className={classes} style={style} {...other}>
        <div className={cx('panel-heading')}>{heading}</div>
        <div className={cx('panel-body')}>
          {children}
        </div>
      </div>
    );
  }
}

export default Panel;
