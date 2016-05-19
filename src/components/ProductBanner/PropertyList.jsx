import React, {Component} from 'react';
import AbstractPropertyList from '../AbstractPropertyList';

class PropertyList extends AbstractPropertyList {

  render() {
    let { background, title, desc, btns=[]  } = this.props;
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
      <div className="form-group">
        <label htmlFor="" className="col-3">描述</label>
        <div className="col-9">
          <textarea className="form-control" rows="6" value={desc} onChange={this.onPropChange.bind(this, 'desc')}/>
        </div>
      </div>
    </div>);
  }
}

export default PropertyList;
