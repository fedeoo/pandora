import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class TopBar extends Component {

  constructor() {
    super();
    this.onPreview = this.onPreview.bind(this);
  }
  onPreview() {
    let { togglePreview } = this.props;
    togglePreview();
  }
  render() {
    return (<div className="toolbar">
      <button onClick={this.onPreview}>预览</button>
    </div>)
  }
}

function mapState ({ cmd }) {
  let { isPreview } = cmd;
  return {
    isPreview
  };
}

export default connect(mapState, actions)(TopBar);
