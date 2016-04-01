import React from 'react';
import {AppBar} from 'material-ui'

class PropertyPanel extends React.Component {
  render () {
    return (
      <div className="mt-property-panel">
        <AppBar title="Properties"/>
      </div>
    );
  }
}

export default PropertyPanel;
