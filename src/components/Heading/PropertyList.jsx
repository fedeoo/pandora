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
    let { size, title } = this.props;
    return (<div>
      <div>
        <label htmlFor="">size:</label>
        <input type="text" value={size} onChange={this.onPropertyChange.bind(this, 'size')}/>
      </div>
      <div>
        <label htmlFor="">title:</label>
        <input type="text" value={title} onChange={this.onPropertyChange.bind(this, 'title')}/>
      </div>
    </div>);
  }
}

export default PropertyList;
