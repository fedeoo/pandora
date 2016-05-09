import React, { Component } from 'react';
import { connect } from 'react-redux';
import Components, { Button } from '../../components';
import * as actions from '../../actions';

import classNames from 'classnames/bind';
import styles from './preview.scss';
const cx = classNames.bind(styles);

class Preview extends Component {
  constructor() {
    super();
    this.onExitPreivew = this.onExitPreivew.bind(this);
  }
  onExitPreivew() {
    let { togglePreview } = this.props;
    togglePreview();
  }

  render () {
    let {
      connectDropTarget,
      childComponents,
      isPreview
    } = this.props;

    const className = cx({
      'preview-container': true,
      'hide': !isPreview
    })
    return (<div className={className}>
      <div className={cx('ds-preview')}>
        <Button className={cx('exit-btn')} type="primary" text="退出" onClick={this.onExitPreivew} />
        {
          childComponents.map((item) => {
            let { ctype, cid, data } = item;
            let ItemComponent = Components[ctype];
            return <ItemComponent key={cid} {...data} />;
          })
        }
      </div>
    </div>);
  }
}


function mapState ({ cInstances, cmd }, ownProps) {
  let currentComponent = cInstances.get(ownProps.cid);
  let childComponents = currentComponent.get('childIds').map((cid) => {
    return cInstances.get(cid);
  });
  let { isPreview } = cmd;
  return currentComponent.set('childComponents', childComponents).set('isPreview', isPreview).toJS();
}

export default connect(mapState, actions)(Preview);
