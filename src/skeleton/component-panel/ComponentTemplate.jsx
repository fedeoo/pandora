import React, {Component} from 'react';
import {DragSource} from 'react-dnd';
import {ComponentTypes} from '../Constants.js';

const componentSource = {
  beginDrag(props) {
    return {
      ctype: props.cid
    };
  }
};

function collect (connect, monitor) {
  return {
    connectDragSource: connect.dragSource()
  };
}

class ComponentTemplate extends Component {
  render () {
    let {cid, label, connectDragSource} = this.props;
    let iconClass = `icon-${cid}`;
    return connectDragSource(
      <li key={cid} className="component-item" data-cid={cid}>
        <div cid={cid} className={iconClass}></div>
        <div className="label">{label}</div>
    </li>
    );
  }
}

export default DragSource(ComponentTypes.COMPONENT, componentSource, collect)(ComponentTemplate);
