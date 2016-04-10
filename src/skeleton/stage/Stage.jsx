import React, {Component} from 'react';
import {DropTarget} from 'react-dnd';
import {ComponentTypes} from '../Constants';

import {addComponent} from '../../actions';
import Components from './Proxy.jsx';

import './stage.scss';

const stageTarget = {
  drop (props, monitor) {
    if (!monitor.didDrop()) {
      let {ctype} = monitor.getItem();
      props.dispatch(addComponent(ctype));
    }
  }
}

@DropTarget(ComponentTypes.COMPONENT, stageTarget, (connect) => ({
  connectDropTarget: connect.dropTarget()
}))
class Stage extends Component {

  render () {
    let {
      connectDropTarget,
      className,
      dispatch,
      childComponents
    } = this.props;

    return connectDropTarget(<div className={className}>
      {
        childComponents.map((item, index) => {
          let { ctype, cid, pid, data, isHover, isSelected } = item;
          data = data.toJS();
          let ItemComponent = Components[ctype];

          return <ItemComponent key={cid} cid={cid} index={index} pid={pid} isHover={isHover} isSelected={isSelected} dispatch={dispatch} {...data} />;
        })
      }
    </div>);
  }
}

export default Stage;
