import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import {DropTarget, DragSource} from 'react-dnd';
import _ from 'lodash';

import {ComponentTypes} from '../Constants';
import classNames from 'classnames/bind';
import styles from './component-wrapper.scss';

const cx = classNames.bind(styles);

const proxySource = {
  beginDrag(props) {
    return _.pick(props, ['cid', 'pid', 'index']);
  }
};

const hover = (props, monitor, component) => {
  let item = monitor.getItem();
  if (_.isNil(item)) { // bug of react-dnd-html5-backend in some condition
    return;
  }
  const { index: dragIndex, pid: dragPid, cid: dragCid } = item;
  if (_.isNil(dragCid) || _.isNil(dragIndex)) {
    return;
  }
  // const dragIndex = monitor.getItem().index;
  const hoverIndex = props.index;
  const hoverPid = props.pid;
  // Don't replace items with themselves
  if (dragIndex === hoverIndex && dragPid === hoverPid) {
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
  props.moveComponent({
    cid: monitor.getItem().cid,
    pid: monitor.getItem().pid,
    index: dragIndex,
    desCid: props.pid,
    desIndex: hoverIndex
  });
};
const proxyTarget = {
  hover: _.throttle(hover, 250)
};

export default function (RawComponent) {
  @DragSource(ComponentTypes.INSTANCE, proxySource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }))
  @DropTarget(ComponentTypes.INSTANCE, proxyTarget, (connect) => ({
    connectDropTarget: connect.dropTarget()
  }))
  class WrappedComponent extends Component {

    constructor() {
      super();
      this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick(event) {
      let { selectComponent } = this.props;
      selectComponent(this.props.cid);
      event.stopPropagation();
    }

    render() {
      let { isHover, isSelected, connectDragSource, connectDropTarget, selectComponent, isDragging, data, childComponents } = this.props;
      let classList = cx({
        'ds-component-container': true,
        'hover': isHover,
        'selected': isSelected,
        'dragging': isDragging
      });
      return connectDragSource(connectDropTarget(
        <div className={classList} onClick={this.handlerClick}>
          <RawComponent cid={this.props.cid} {...data} />
          <div className={cx('highlight-selector')} />
          <div className={cx('highlight')} />
          <div className={cx('ds-component-mask')} />
        </div>
      ));
    }
  }

  return WrappedComponent;
};
