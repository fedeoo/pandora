import React, {Component} from 'react';
import {AppBar} from 'material-ui';
import Panel from '../panel';

import ComponentList from './ComponentList.jsx';

class ComponentPanel extends Component {
  // constructor () {
  //   super();
  //   this.setState({
  //     list: [{
  //       cid: 'heading',
  //       label: 'Heading'
  //     }]
  //   });
  // }

  render () {
    let list = [{
      cid: 'heading',
      label: 'Heading'
    }];
    return (
      <Panel heading="Compoents" className="ds-component-panel">
        <ComponentList data={list}/>
      </Panel>
    );
  }
}

export default ComponentPanel;
