import React, {Component} from 'react';
import {connect} from 'react-redux';

import Stage from './Stage.jsx';

class StageContainer extends Component {

  render () {
    let {
      dispatch,
      activeComponents = [],
      childComponents = []
    } = this.props;
    return (
      <div className="ds-stage-container">
        <Stage className="ds-stage" activeComponents={activeComponents} childComponents={childComponents} dispatch={dispatch} />
      </div>
    );
  }
}

// export container component
function mapState ({cInstances}) {
  return {
    activeComponents: cInstances,
    childComponents: cInstances[0].childComponents
  };
}

export default connect(mapState)((props) => {
  return (<StageContainer {...props}/>);
});
