import React from 'react';
import {AppBar} from 'material-ui'

class ComponentPanel extends React.Component {
  render () {
    return (
      <div className="mt-component-panel">
        <AppBar title="Components"/>
      </div>
    );
  }
}

export default ComponentPanel;
