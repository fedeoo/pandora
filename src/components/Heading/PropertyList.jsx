import React, {Component} from 'react';
import AbstractPropertyList from '../AbstractPropertyList';

class PropertyList extends AbstractPropertyList {

  render() {
    let { size, title } = this.props;
    return (<div className="form-horizontal">
      <div className="form-group">
        <label htmlFor="" className="col-3">size</label>
        <div className="col-9">
          <select className="form-control" onChange={this.onPropChange.bind(this, 'size')}>
            <option value="1">h1</option>
            <option value="2">h2</option>
            <option value="3">h3</option>
            <option value="4">h4</option>
            <option value="5">h5</option>
            <option value="6">h6</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="" className="col-3">title</label>
        <div className="col-9">
          <input type="text" className="form-control" value={title} onChange={this.onPropChange.bind(this, 'title')}/>
        </div>
      </div>
    </div>);
  }
}

export default PropertyList;
