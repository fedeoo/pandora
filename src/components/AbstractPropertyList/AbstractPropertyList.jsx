import React, { Component } from 'react';

const forceUpdateObjProp = (obj, propName) => {
  if (_.isArray(obj[propName])) { // force update new data
    obj[propName] = [].concat(obj[propName]);
  }
};

class AbstractPropertyList extends Component {

  onPropChange(name, event) {
    let { changeComponent, cid } = this.props;
    if (_.isFunction(changeComponent)) {
      let propName = name.replace(/[\[\.].*$/, ''); // get prop Name
      let oldData = _.pick(this.props, [propName]);
      let newData = _.set(oldData, name, event.target.value);
      forceUpdateObjProp(oldData, propName);
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

AbstractPropertyList.defaultProps = {
  changeComponent() {}
};

export default AbstractPropertyList;
