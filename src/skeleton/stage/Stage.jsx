import React, {Component} from 'react';
import {DropTarget} from 'react-dnd';
import {connect} from 'react-redux';
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
    let {connectDropTarget, className, activeComponents = []} = this.props;
    console.log('activeComponents', activeComponents);
    return connectDropTarget(<div className={className}>
      {
        activeComponents.map((item) => {
          let ItemComponent = Conponents[item.ctype];
          if (!ItemComponent) {
              throw new Error(`can't find Component ctype: ${item.ctype}`);
          }
          return <ItemComponent key={item.key} />;
        })
      }
    </div>);
  }
}
let DropabledStage = DropTarget(ComponentTypes.COMPONENT, stageTarget, collect)(Stage);

// export container component
function mapState ({components}) {
  return {
    activeComponents: components
  };
}

export default connect(mapState)((props) => {
  return (<DropabledStage {...props}/>);
});
