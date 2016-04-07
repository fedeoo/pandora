import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle, FontIcon, RaisedButton} from 'material-ui';

import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import 'font-awesome/css/font-awesome.css';

import {ComponentPanel} from './component-panel';
import StageModule, {Stage} from './stage';
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
        <div className="ds-stage-container">
          <Stage className="ds-stage"/>
        </div>
        <PropertyPanel className="ds-property-panel"/>
     </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(AppComponent);
