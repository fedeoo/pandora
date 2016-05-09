import React, { Component } from 'react';
import { connect } from 'react-redux';
import Components from '../../components';
import classNames from 'classnames/bind';
import styles from './preview.scss';
const cx = classNames.bind(styles);

class Preview extends Component {
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
      {
        childComponents.map((item) => {
          let { ctype, cid, data } = item;
          let ItemComponent = Components[ctype];
          return <ItemComponent key={cid} {...data} />;
        })
      }
    </div></div>);
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

export default connect(mapState)(Preview);
