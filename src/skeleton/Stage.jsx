import React, {Component} from 'react';
import {DropTarget} from 'react-dnd';
import {ComponentTypes} from './Constants.js';

const stageTarget = {
  drop (props, monitor) {
    console.log('drop....', monitor.getItem());
    let item = monitor.getItem();
  }
}

function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

class Stage extends Component {
  render () {
    let {connectDropTarget} = this.props;
    return connectDropTarget(<div></div>);
  }
}

export default DropTarget(ComponentTypes.COMPONENT, stageTarget, collect)(Stage);
