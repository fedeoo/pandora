import React, {Component} from 'react';
import AbstractPropertyList from '../AbstractPropertyList';
import Icon from '../Icon';

import classNames from 'classnames/bind';
import styles from '../ItemList/item-list.scss';
const cx = classNames.bind(styles);

class PropertyList extends AbstractPropertyList {

  bubbelChange(steps) {
    this.onPropChange('steps', this.genetateStubEvent([].concat(steps)));
  }
  onStepChange(index, event) {
    let steps = this.props.steps;
    steps[index] = event.target.value;
    this.bubbelChange(steps);
  }
  onAdd() {
    let steps = this.props.steps;
    this.bubbelChange([].concat(steps, 'step'));
  }
  onRemove(index) {
    let steps = this.props.steps;
    steps.splice(index, 1);
    this.bubbelChange(steps);
  }
  render() {
    let { background, title, steps = [] } = this.props;
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
          <Icon type="add" className="pull-right text-success" onClick={this.onAdd.bind(this)}/>
          <label htmlFor="">Steps</label>
        </div>
        {
          steps.map((step, index) => {
            return (<div key={index} className={cx('item')}>
              <div className={cx('item-header', 'clearfix')}>
                <Icon type="rubbish" className="pull-right text-danger" onClick={this.onRemove.bind(this, index)} />
                Step
              </div>
              <div className={cx('item-body')}>
                <div className="form-group">
                  <label htmlFor="" className="col-3">文本</label>
                  <div className="col-9">
                    <input type="text" className="form-control" value={step} onChange={this.onStepChange.bind(this, index)}/>
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
