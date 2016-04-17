import React, {Component} from 'react';
import {Card} from 'material-ui';
import Panel from '../panel';
import {connect} from 'react-redux';

import ComponentList from './ComponentList.jsx';

import './component-panel.scss';

function mapState (state) {
  let defaultList = [{
    ctype: 'Heading',
    label: 'Heading'
  }, {
    ctype: 'Grid',
    label: 'Grid'
  }];
  let {mountedComponents = defaultList} = state;
  return {mountedComponents};
}

const ComponentPanel = (store) => {
  let {mountedComponents} = store;
  return <Panel heading="Components" className="ds-component-panel">
    <ComponentList data={mountedComponents}/>
  </Panel>
};

export default connect(mapState)(ComponentPanel);
