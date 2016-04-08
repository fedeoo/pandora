import React, {Component} from 'react';

class PropertyList extends Component {

  constructor() {
    super();

    this.onSizeChange = this.onSizeChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  onSizeChange(e) {
    let {handleChange, cid} = this.props;
    handleChange({
      cid: cid,
      data: {
        size: e.target.value
      }
    });
  }
  onTextChange(e) {
    let {handleChange, cid} = this.props;
    handleChange({
      cid: cid,
      data: {
        title: e.target.value
      }
    });
  }
  render() {
    let { size, title } = this.props;
    return (<div>
      <div><label htmlFor="">size:</label><input type="text" value={size} onChange={this.onSizeChange}/></div>
      <div><label htmlFor="">title:</label><input type="text" value={title} onChange={this.onTextChange}/></div>
    </div>);
  }
}

export default PropertyList;
