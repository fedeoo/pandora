import React, {Component} from 'react';
import {AppBar} from 'material-ui';
import {connect} from 'react-redux';
import _ from 'lodash';

import {changeComponent} from '../../actions';
import Panel from '../panel';
import Property from '../../components/property';

function mapState ({components = []}) {
  let selectedComponent = _.find(components, 'isSelected');
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

const PropertyPanel = ({ selectedComponent = {}, handleChange}) => {
  let { ctype, cid, data } = selectedComponent;
  if (!ctype) {
    return (<div />);
  }
  let PropertyList = Property[ctype];
  return (
    <Panel heading={ctype} className="ds-property-panel">
      <PropertyList cid={cid} handleChange={handleChange} {...data} />
    </Panel>
  );
}

export default connect(mapState, mapDispatch)(PropertyPanel);
