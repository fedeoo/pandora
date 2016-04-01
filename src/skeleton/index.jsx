import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle, FontIcon, RaisedButton} from 'material-ui';

import ComponentPanel from './ComponentPanel.jsx';
import Stage from './Stage.jsx'
import PropertyPanel from './PropertyPanel.jsx';
import './skeleton.scss';

class AppComponent extends React.Component {
  render () {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup float="left">
            <ToolbarTitle text="Pandora" />
          </ToolbarGroup>
          <ToolbarGroup float="right">
            <RaisedButton label="Create Broadcast" primary={true} />
          </ToolbarGroup>
        </Toolbar>
        <ComponentPanel />
        <Stage className="mt-stage"/>
        <PropertyPanel/>
     </div>
    );
  }
}

export default AppComponent;
