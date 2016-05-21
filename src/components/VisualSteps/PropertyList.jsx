import React, {Component} from 'react';
import AbstractPropertyList from '../AbstractPropertyList';
import Icon from '../Icon';

import classNames from 'classnames/bind';
import styles from '../ItemList/item-list.scss';
const cx = classNames.bind(styles);

class PropertyList extends AbstractPropertyList {

  render() {
    let { background, title, steps = [] } = this.props;
    let defaultItem = 'Step *';
    return (<div className="form-horizontal">
      <div className="form-group">
        <label htmlFor="" className="col-3">背景</label>
        <div className="col-9">
          <input type="text" className="form-control" value={background} onChange={this.onPropChange.bind(this, 'background')}/>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="" className="col-3">名称</label>
        <div className="col-9">
          <input type="text" className="form-control" value={title} onChange={this.onPropChange.bind(this, 'title')}/>
        </div>
      </div>
      <div className={cx('item-list')}>
        <div className={cx('header')}>
          <Icon type="add" className="pull-right text-success" onClick={this.onPropAdd.bind(this, 'steps', defaultItem)}/>
          <label htmlFor="">Steps</label>
        </div>
        {
          steps.map((step, index) => {
            return (<div key={index} className={cx('item')}>
              <div className={cx('item-header', 'clearfix')}>
                <Icon type="rubbish" className="pull-right text-danger" onClick={this.onPropRemove.bind(this, 'steps', index)} />
                Step
              </div>
              <div className={cx('item-body')}>
                <div className="form-group">
                  <label htmlFor="" className="col-3">文本</label>
                  <div className="col-9">
                    <input type="text" className="form-control" value={step} onChange={this.onPropChange.bind(this, `steps[${index}]`)}/>
                  </div>
                </div>
              </div>
            </div>);
          })
        }
      </div>
    </div>);
  }
}

export default PropertyList;
