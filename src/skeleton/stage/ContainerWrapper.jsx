"use extensible";

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import _ from 'lodash';

import VirtualLayer from './VirtualLayer.jsx';


export default function (RawComponent) {

  class PerContainer extends RawComponent {
    getChildBlocks() {
      let childBlocks = super.getChildBlocks();
      let { childIds } = this.props;

      return _.map(childBlocks, (childBlock, index) => {
        let cid = childIds[index];
        return (<VirtualLayer key={cid} cid={cid} {...childBlock.props} />)
      });
    }
  }

  function mapState ({ cInstances }, ownProps) {
    return cInstances.get(ownProps.cid).toJS();
  }

  return connect(mapState)(PerContainer);
}
