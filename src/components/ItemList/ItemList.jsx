import React, { Component, Children } from 'react';
import Icon from '../Icon';

import classNames from 'classnames/bind';
import styles from './item-list.scss';
const cx = classNames.bind(styles);

class ItemList extends Component {
  render() {
    let { onAdd, header, children } = this.props;
    return <div className={cx('item-list')}>
      <div className={cx('header')}>
        <Icon type="add" className="pull-right text-success" onClick={onAdd}/>
        <label htmlFor="">{header}</label>
      </div>
      {children}
    </div>
  }
}

export default ItemList;
