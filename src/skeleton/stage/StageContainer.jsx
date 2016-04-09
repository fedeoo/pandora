"use extensible";

import React, {Component} from 'react';
import {connect} from 'react-redux';

import Stage from './Stage.jsx';

class StageContainer extends Component {

  render () {
    let {
      dispatch,
      cInstances,
      childComponents
    } = this.props;
    return (
      <div className="ds-stage-container">
        <Stage className="ds-stage" cInstances={cInstances} childComponents={childComponents} dispatch={dispatch} />
      </div>
    );
  }
}

// export container component
function mapState ({cInstances}) {
  let childComponents = cInstances.getIn(['cid-0', 'childIds']).map((cid) => {
    return cInstances.get(cid);
  });
  return {
    cInstances: cInstances,
    childComponents: childComponents
  };
}

export default connect(mapState)((props) => {
  return (<StageContainer {...props}/>);
});
