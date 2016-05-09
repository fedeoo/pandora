import React from 'react';
// import {Toolbar, ToolbarGroup, ToolbarTitle, FontIcon, RaisedButton} from 'material-ui';

import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import {ComponentPanel} from './component-panel';
import StageModule, {StageContainer} from './stage';
import {PropertyPanel} from './property-panel';
import Preview from './preview';
import Toolbar from './toolbar';
import classNames from 'classnames/bind';
import styles from './skeleton.scss';

const cx = classNames.bind(styles);

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <Toolbar />
        <div className={cx('workbench')}>
          <ComponentPanel className={cx('ds-component-panel')} />
          <StageContainer className={cx('ds-stage-container')} />
          <PropertyPanel className={cx('ds-property-panel')} />
          <Preview className={cx('ds-preview')} cid="cid-0" />
        </div>
     </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(AppComponent);
