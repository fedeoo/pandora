import React, {Component} from 'react';
import {AppBar} from 'material-ui'

class PropertyPanel extends Component {
  render () {
    return (
      <div className="ds-property-panel">
        <AppBar title="Properties"/>
      </div>
    );
  }
}

export default PropertyPanel;
