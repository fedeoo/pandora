import React, { Component } from 'react';

class AbstractPropertyList extends Component {

  onPropChange(name, event) {
    let { handleChange, cid } = this.props;
    handleChange({
      cid: cid,
      data: {
        [name]: event.target.value
      }
    });
  }
}

AbstractPropertyList.defaultProps = {
  handleChange() {}
};

export default AbstractPropertyList;
