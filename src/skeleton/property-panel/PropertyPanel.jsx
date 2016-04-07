import React, {Component} from 'react';
import {AppBar} from 'material-ui';
import {connect} from 'react-redux';

function mapState (state) {
  let {selectedComponent = {}} = state;
  return {
    selectedType: selectedComponent.type,
    propsMaper: []
  };
}

const PropertyPanel = () => {
  return (
    <div className="ds-property-panel">
      <AppBar title="Properties"/>
    </div>
  )
}

export default connect(mapState)(PropertyPanel);
