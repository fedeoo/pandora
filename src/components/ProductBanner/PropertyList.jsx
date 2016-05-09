import React, {Component} from 'react';

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
    let { background, title, desc, btns=[]  } = this.props;
    return (<div className="form-horizontal">
      <div className="form-group">
        <label htmlFor="" className="col-3">背景</label>
        <div className="col-9">
          <input type="text" className="form-control" value={background} onChange={this.onPropertyChange.bind(this, 'background')}/>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="" className="col-3">名称</label>
        <div className="col-9">
          <input type="text" className="form-control" value={title} onChange={this.onPropertyChange.bind(this, 'title')}/>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="" className="col-3">描述</label>
        <div className="col-9">
          <textarea className="form-control" rows="6" value={desc} onChange={this.onPropertyChange.bind(this, 'desc')}/>
        </div>
      </div>
    </div>);
  }
}

export default PropertyList;
