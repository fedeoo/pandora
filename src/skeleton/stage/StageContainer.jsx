import React, {Component} from 'react';
import {connect} from 'react-redux';

import VirtualLayer from  './VirtualLayer.jsx';

class StageContainer extends Component {

  render () {
    return (<VirtualLayer className={this.props.className} cid="cid-0" />);
  }

}

export default StageContainer;
