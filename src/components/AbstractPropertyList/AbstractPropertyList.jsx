import React, { Component } from 'react';

const forceUpdateObjProp = (obj, propName) => {
  if (_.isArray(obj[propName])) { // force update new data
    obj[propName] = [].concat(obj[propName]);
  }
};

class AbstractPropertyList extends Component {

  handleChange(name, value) {
    let { changeComponent, cid } = this.props;
    if (_.isFunction(changeComponent)) {
      let propName = name.replace(/[\[\.].*$/, ''); // get prop Name
      let oldData = _.pick(this.props, [propName]);
      let newData = _.set(oldData, name, value);
      forceUpdateObjProp(oldData, propName);
      changeComponent({
        cid: cid,
        data: newData
      });
    }
  }
  onPropChange(name, event) {
    this.handleChange(name, event.target.value)
  }

  onPropAdd(name, value) {
    let oldValue = _.get(this.props, name);
    if (!_.isArray(oldValue)) {
      throw new Error(`props.${name} is not array!`);
    }
    let newValue = [].concat(oldValue, value);
    this.handleChange(name, newValue);
  }
  onPropRemove(name, index) { // 'steps' 1
    let oldValue = _.get(this.props, name);
    if (!_.isArray(oldValue)) {
      throw new Error(`props.${name} is not array!`);
    }
    oldValue.splice(index, 1);
    this.handleChange(name, oldValue);
  }

  genetateStubEvent(value) {
    return {
      target: {
        value: value
      }
    };
  }
}

AbstractPropertyList.defaultProps = {
  changeComponent() {}
};

export default AbstractPropertyList;
