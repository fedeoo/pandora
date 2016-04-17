/**
 * VirtualLayer: bridge Container and Dumb Componnet.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import { ComponentTypes } from '../Constants';

import * as actions from '../../actions';
import Components from './Proxy.jsx';

const dropTarget = {
  drop (props, monitor) {
    if (!monitor.didDrop()) {
      let { ctype } = monitor.getItem();
      if (ctype) {
        props.addComponent({
          ctype: ctype,
          pid: props.cid
        });
      }
    }
  },
  hover: _.throttle((props, monitor) => {
    if (monitor.isOver({shallow: false})) {
      let item = monitor.getItem();
      if (_.isNil(item)) { // bug of react-dnd-html5-backend in some condition
        return;
      }
      if (item.cid && props.childIds.length === 0) {
        props.moveComponent(_.merge(item, {
          desCid: props.cid,
          desIndex: props.index
        }));
      }
    }
  }, 250)
}

@DropTarget(ComponentTypes.INSTANCE, dropTarget, (connect) => ({
  connectDropTarget: connect.dropTarget()
}))
class VirtualLayer extends Component {

  render () {
    let {
      connectDropTarget,
      className,
      childComponents
    } = this.props;
    let eventHandlers = _.pick(this.props, _.keys(actions));

    return connectDropTarget(<div className={className}>
      {
        childComponents.map((item, index) => {
          let { ctype, cid, pid } = item;
          let ItemComponent = Components[ctype];
          return <ItemComponent key={cid} index={index} pid={pid} {...item} {...eventHandlers} />;
        })
      }
    </div>);
  }
}

function mapState ({ cInstances }, ownProps) {
  let currentComponent = cInstances.get(ownProps.cid);
  let childComponents = currentComponent.get('childIds').map((cid) => {
    return cInstances.get(cid);
  });
  return currentComponent.set('childComponents', childComponents).toJS();
}

export default connect(mapState, actions)(VirtualLayer);
