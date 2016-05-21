import React, { Component, Children } from 'react';
import Icon from '../Icon';

import classNames from 'classnames/bind';
import styles from './item-list.scss';
const cx = classNames.bind(styles);

class Item extends Component {
  constructor() {
    super();
    this.state = {
      isActive: true
    };
  }
  onItemClick(event) {
    let isActive = !this.state.isActive;
    this.setState({
      isActive
    });
    event.stopPropagation();
  }
  render() {
    let { onRemove, header, children } = this.props;
    const isActive = this.state.isActive;
    const classes = cx({
      item: true,
      expand: isActive
    });
    const arrowType = isActive ? 'arrowdown' : 'arrowright1';
    return (<div className={classes}>
      <div className={cx('item-header', 'clearfix')} onClick={this.onItemClick.bind(this)}>
        <Icon type="rubbish" className="pull-right text-danger" onClick={onRemove} />
        <Icon type={arrowType}></Icon>
        {header}
      </div>
      <div className={cx('item-body')}>{children}</div>
    </div>)
  }
}

export default Item;
