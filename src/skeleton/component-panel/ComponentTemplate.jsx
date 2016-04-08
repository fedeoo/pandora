import React, {Component} from 'react';
import {DragSource} from 'react-dnd';
import {ComponentTypes} from '../Constants.js';

const componentSource = {
  beginDrag(props) {
    return {
      ctype: props.ctype
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
    let {ctype, label, connectDragSource} = this.props;
    let iconClass = `icon-${ctype}`;
    return connectDragSource(
      <li key={ctype} className="component-item" data-ctype={ctype}>
        <div ctype={ctype} className={iconClass}></div>
        <div className="label">{label}</div>
    </li>
    );
  }
}

export default DragSource(ComponentTypes.COMPONENT, componentSource, collect)(ComponentTemplate);
