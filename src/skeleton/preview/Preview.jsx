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

  getChildContext() {
    return {
      isEditable: true
    };
  }

  onExitPreivew() {
    let { togglePreview } = this.props;
    togglePreview();
  }

  render () {
    let {
      connectDropTarget,
      childComponents,
      isPreview,
      changeComponent
    } = this.props;

    const className = cx({
      'preview-container': true,
      'hide': !isPreview
    })
    return (<div className={className}>
      <Button className={cx('exit-btn')} type="primary" text="退出" onClick={this.onExitPreivew} />
      <div className={cx('ds-preview')}>
        {
          childComponents.map((item) => {
            let { ctype, cid, data } = item;
            let ItemComponent = Components[ctype];
            return <ItemComponent key={cid} cid={cid} {...data} changeComponent={changeComponent} />;
          })
        }
      </div>
    </div>);
  }
}

Preview.childContextTypes = {
  isEditable: React.PropTypes.bool
};

function mapState ({ cInstances, cmd }, ownProps) {
  let currentComponent = cInstances.get(ownProps.cid);
  let childComponents = currentComponent.get('childIds').map((cid) => {
    return cInstances.get(cid);
  });
  let { isPreview } = cmd;
  return currentComponent.set('childComponents', childComponents).set('isPreview', isPreview).toJS();
}

export default connect(mapState, actions)(Preview);
