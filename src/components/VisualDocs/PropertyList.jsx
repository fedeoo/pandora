import React, {Component} from 'react';
import AbstractPropertyList from '../AbstractPropertyList';
import { ItemList, Item } from '../ItemList';

class PropertyList extends AbstractPropertyList {

  renderLinks(categoriyIndex) {
    let { categories = [] } = this.props;
    let { links = [] } = categories[categoriyIndex];
    let defaultLink = {
      title: 'text',
      url: 'url'
    };
    return <ItemList header="Links" onAdd={this.onPropAdd.bind(this, `categories[${categoriyIndex}].links`, defaultLink)}>
      {
        links.map((link, index) => {
          return (<Item key={index} header="Link" onRemove={this.onPropRemove.bind(this, `categories[${categoriyIndex}].links`, index)} >
            <div className="form-group">
              <label htmlFor="" className="col-3">文本</label>
              <div className="col-9">
                <input type="text" className="form-control" value={link.title} onChange={this.onPropChange.bind(this, `categories[${categoriyIndex}].links[${index}].title`)} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="" className="col-3">链接</label>
              <div className="col-9">
                <input type="text" className="form-control" value={link.url} onChange={this.onPropChange.bind(this, `categories[${categoriyIndex}].links[${index}].url`)} />
              </div>
            </div>
          </Item>);
        })
      }
    </ItemList>
  }
  renderCategories() {
    let { categories = [] } = this.props;
    let defaultCategory = {
      title: 'Title',
      links: []
    };
    return <ItemList header="Categories" onAdd={this.onPropAdd.bind(this, 'categories', defaultCategory)}>
      {
        categories.map((category, index) => {
          return <Item key={index} header="Category" onRemove={this.onPropRemove.bind(this, 'categories', index)}>
            <div className="form-group">
              <label htmlFor="" className="col-3">文本</label>
              <div className="col-9">
                <input type="text" className="form-control" value={category.title} onChange={this.onPropChange.bind(this, `categories[${index}].title`)} />
              </div>
            </div>
            {this.renderLinks(index)}
          </Item>
        })
      }
    </ItemList>
  }
  render() {
    let { background, title } = this.props;
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
      {this.renderCategories()}
    </div>);
  }
}

export default PropertyList;
