import React, {Component} from 'react';
import AbstractPropertyList from '../AbstractPropertyList';
import { ItemList, Item } from '../ItemList';

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
      <ItemList header="Steps" onAdd={this.onPropAdd.bind(this, 'steps', defaultItem)}>
        {
          steps.map((step, index) => {
            return (<Item key={index} header="Step" onRemove={this.onPropRemove.bind(this, 'steps', index)} >
              <div className="form-group">
                <label htmlFor="" className="col-3">文本</label>
                <div className="col-9">
                  <input type="text" className="form-control" value={step} onChange={this.onPropChange.bind(this, `steps[${index}]`)}/>
                </div>
              </div>
            </Item>);
          })
        }
      </ItemList>
    </div>);
  }
}

export default PropertyList;
