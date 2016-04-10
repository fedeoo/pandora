import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import {DropTarget, DragSource} from 'react-dnd';
import _ from 'lodash';

import Conponents from '../../components';
import {hoverComponent, selectComponent, moveComponent, dragComponent} from '../../actions';
import {ComponentTypes} from '../Constants';

const proxySource = {
  beginDrag(props) {
    return _.pick(props, ['cid', 'pid', 'index']);
  }
};

function dragSourceCollect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}
const hover = (props, monitor, component) => {
  console.log('hover', new Date());
  let item = monitor.getItem();
  if (_.isNil(item)) { // bug of react-dnd-html5-backend in some condition
    return;
  }
  const dragIndex = monitor.getItem().index;
  const hoverIndex = props.index;

  // Don't replace items with themselves
  if (dragIndex === hoverIndex) {
    return;
  }

  // Determine rectangle on screen
  const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

  // Get vertical middle
  const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

  // Determine mouse position
  const clientOffset = monitor.getClientOffset();

  // Get pixels to the top
  const hoverClientY = clientOffset.y - hoverBoundingRect.top;

  // Only perform the move when the mouse has crossed half of the items height
  // When dragging downwards, only move when the cursor is below 50%
  // When dragging upwards, only move when the cursor is above 50%

  // Dragging downwards
  if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
    return;
  }

  // Dragging upwards
  if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
    return;
  }
  props.dispatch(moveComponent({
    cid: monitor.getItem().cid,
    pid: monitor.getItem().pid,
    index: dragIndex,
    desCid: monitor.getItem().pid,
    desIndex: hoverIndex
  }));
};
const proxyTarget = {
  hover: _.throttle(hover, 250)
};

function dropTargetCollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

let ProxyComponents = {};
_.each(Conponents, (PerComponent, componentName) => {
  class Proxy extends Component {

    constructor() {
      super();

      this.handlerClick = this.handlerClick.bind(this);
      this.handlerOver = this.handlerOver.bind(this);
    }

    handlerClick() {
      let { dispatch } = this.props;
      dispatch(selectComponent(this.props.cid));
    }
    handlerOver () {
      let { dispatch } = this.props;
      // dispatch(hoverComponent(this.props.cid));
    }

    render() {
      let { isHover, isSelected, connectDragSource, connectDropTarget, isDragging } = this.props;
      let classList = ['ds-component-container'];
      isHover && classList.push('hover');
      isSelected && classList.push('selected');
      isDragging && classList.push('dragging');
      return connectDragSource(connectDropTarget(
        <div className={classList.join(' ')} onClick={this.handlerClick} onMouseOver={this.handlerOver}>
          <PerComponent {...this.props} />
          <div className="highlight-selector" />
          <div className="highlight" />
          <div className="ds-component-mask"></div>
        </div>
      ));
    }
  }
  ProxyComponents[componentName] = DragSource(ComponentTypes.INSTANCE, proxySource, dragSourceCollect)(DropTarget(ComponentTypes.INSTANCE, proxyTarget, dropTargetCollect)(Proxy));
});

export default ProxyComponents;
