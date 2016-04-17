import React, {Component} from 'react';
import {connect} from 'react-redux';

import VirtualLayer from  './VirtualLayer.jsx';
import './stage.scss';

class StageContainer extends Component {

  render () {
    return (
      <div className="ds-stage-container">
        <VirtualLayer className="ds-stage" cid="cid-0" />
      </div>
    );
  }

}

export default StageContainer;
