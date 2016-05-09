import React, { Component } from 'react';

class PropertyList extends Component {

  onPropertyChange(name, event) {
    let { handleChange, cid } = this.props;
    handleChange({
      cid: cid,
      data: {
        [name]: event.target.value
      }
    });
  }
  render() {
    let { size, type } = this.props;
    return (<div className="form-horizontal">
      <div className="form-group">
        <label htmlFor="" className="col-3">size</label>
        <div className="col-9">
          <select className="form-control" onChange={this.onPropertyChange.bind(this, 'size')}>
            <option value="xl">超大</option>
            <option value="lg">大</option>
            <option value="sm">小</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="" className="col-3">type</label>
        <div className="col-9">
          <select className="form-control" onChange={this.onPropertyChange.bind(this, 'type')}>
            <option value="primary">primary</option>
            <option value="default">default</option>
            <option value="warning">warning</option>
          </select>
        </div>
      </div>
    </div>);
  }
}

export default PropertyList;
