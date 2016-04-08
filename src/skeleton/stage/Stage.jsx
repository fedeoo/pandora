import React, {Component} from 'react';
import {DropTarget} from 'react-dnd';
import {ComponentTypes} from '../Constants';

import {addComponent} from '../../actions';
import Conponents from '../../components'

const stageTarget = {
  drop (props, monitor) {
    if (!monitor.didDrop()) {
      let {ctype} = monitor.getItem();
      props.dispatch(addComponent(ctype));
    }
  }
}

function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

class Stage extends Component {

  render () {
    let {
      connectDropTarget,
      className,
      activeComponents = [],
      childComponents = []
    } = this.props;

    return connectDropTarget(<div className={className}>
      {
        childComponents.map((cid) => {
          let item = activeComponents[cid];
          let ItemComponent = Conponents[item.ctype];
          if (!ItemComponent) {
              throw new Error(`can't find Component ctype: ${item.ctype}`);
          }
          return <ItemComponent key={item.key} {...item.data} />;
        })
      }
    </div>);
  }
}

export default DropTarget(ComponentTypes.COMPONENT, stageTarget, collect)(Stage);
