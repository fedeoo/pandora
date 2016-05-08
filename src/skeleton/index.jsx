import React from 'react';
// import {Toolbar, ToolbarGroup, ToolbarTitle, FontIcon, RaisedButton} from 'material-ui';

import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import {ComponentPanel} from './component-panel';
import StageModule, {StageContainer} from './stage';
import {PropertyPanel} from './property-panel';
import Preview from './preview';
import Toolbar from './toolbar';
import './skeleton.scss';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <Toolbar />
        <div className="workbench">
          <ComponentPanel className="ds-component-panel"/>
          <StageContainer />
          <PropertyPanel className="ds-property-panel"/>
          <Preview className="ds-preview" cid="cid-0" />
        </div>
     </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(AppComponent);
