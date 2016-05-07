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
    let { height, margin, padding, background, border } = this.props;
    return (<div>
      <div><label htmlFor="">height:</label><input type="text" value={height} onChange={this.onPropertyChange.bind(this, 'height')}/></div>
      <div><label htmlFor="">margin:</label><input type="text" value={margin} onChange={this.onPropertyChange.bind(this, 'margin')}/></div>
      <div><label htmlFor="">padding:</label><input type="text" value={padding} onChange={this.onPropertyChange.bind(this, 'padding')}/></div>
      <div><label htmlFor="">background:</label><input type="text" value={background} onChange={this.onPropertyChange.bind(this, 'background')}/></div>
      <div><label htmlFor="">border:</label><input type="text" value={border} onChange={this.onPropertyChange.bind(this, 'border')}/></div>
    </div>);
  }
}

export default PropertyList;
