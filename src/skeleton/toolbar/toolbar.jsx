import {Toolbar, ToolbarGroup, ToolbarTitle, FontIcon, RaisedButton} from 'material-ui';
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
    return (<Toolbar>
      <ToolbarGroup float="left">
        <ToolbarTitle text="Pandora" />
      </ToolbarGroup>
      <ToolbarGroup float="right">
        <RaisedButton label="preview" primary={true} onClick={this.onPreview} />
      </ToolbarGroup>
    </Toolbar>);
  }
}

function mapState ({ cmd }) {
  let { isPreview } = cmd;
  return {
    isPreview
  };
}

export default connect(mapState, actions)(TopBar);
