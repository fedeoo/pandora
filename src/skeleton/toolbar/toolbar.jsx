import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import * as actions from '../../actions';
import { Button } from '../../components';
import styles from './toolbar.scss';

const cx = classNames.bind(styles);

class ToolBar extends Component {

  constructor() {
    super();
    this.onPreview = this.onPreview.bind(this);
  }
  onPreview() {
    let { togglePreview } = this.props;
    togglePreview();
  }
  render() {
    const clz = cx('toolbar');
    return (<div className={clz}>
      <Button onClick={this.onPreview} type="primary" text="预览" />
    </div>)
  }
}

function mapState ({ cmd }) {
  let { isPreview } = cmd;
  return {
    isPreview
  };
}

export default connect(mapState, actions)(ToolBar);
