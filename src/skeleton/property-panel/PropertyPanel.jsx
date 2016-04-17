"use extensible";

import React, {Component} from 'react';
import {AppBar} from 'material-ui';
import {connect} from 'react-redux';
import _ from 'lodash';

import {changeComponent} from '../../actions';
import Panel from '../panel';
import Property from '../../components/property';

function mapState ({cInstances}) {
  let selectedComponent = cInstances.find((item) => { return item.get('isSelected'); });
  return {
    selectedComponent
  };
}

function mapDispatch (dispatch) {
  return {
    handleChange: (data) => {
      return dispatch(changeComponent(data));
    }
  };
}

const PropertyPanel = ({ selectedComponent, handleChange}) => {
  if (!selectedComponent) {
    return (<div />);
  }
  let { ctype, cid, data } = selectedComponent;
  if (!ctype) {
    return (<div />);
  }
  let PropertyList = Property[ctype];
  if (!PropertyList) {
    return (<div />);
  }
  data = data.toJS(); // Immutable Data to plain Object
  return (
    <Panel heading={ctype} className="ds-property-panel">
      <PropertyList cid={cid} handleChange={handleChange} {...data} />
    </Panel>
  );
}

export default connect(mapState, mapDispatch)(PropertyPanel);
