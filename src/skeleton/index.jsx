import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle, FontIcon, RaisedButton} from 'material-ui';

import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import 'font-awesome/css/font-awesome.css';

import {ComponentPanel} from './component-panel';
import StageModule, {StageContainer} from './stage';
import {PropertyPanel} from './property-panel';
import './skeleton.scss';

console.log(typeof Stage, 'StageModule', StageModule);
class AppComponent extends React.Component {
  render() {
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
        <ComponentPanel className="ds-component-panel"/>
        <StageContainer />
        <PropertyPanel className="ds-property-panel"/>
     </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(AppComponent);
