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
  constructor() {
    super();
    this.handlerKeyPress = this.handlerKeyPress.bind(this);
  }
  // prevent system key event. like backspace trigger page back
  handlerKeyPress(event) {
    let doPrevent = false;
    if (event.keyCode === 8) {
      let d = event.srcElement || event.target;
      if ((d.tagName.toUpperCase() === 'INPUT' &&
        (
          d.type.toUpperCase() === 'TEXT' ||
          d.type.toUpperCase() === 'PASSWORD' ||
          d.type.toUpperCase() === 'FILE' ||
          d.type.toUpperCase() === 'SEARCH' ||
          d.type.toUpperCase() === 'EMAIL' ||
          d.type.toUpperCase() === 'NUMBER' ||
          d.type.toUpperCase() === 'DATE')
        ) ||
        d.tagName.toUpperCase() === 'TEXTAREA') {
        doPrevent = d.readOnly || d.disabled;
      } else {
        doPrevent = true;
      }
    }
    if (doPrevent) {
      event.preventDefault();
    }
  }
  render() {
    return (
      <div className={cx('skeleton')} onKeyDown={this.handlerKeyPress} tabIndex="0">
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
