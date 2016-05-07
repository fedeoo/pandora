import React, { Component } from 'react';
import { connect } from 'react-redux';
import Components from '../../components';

class Preview extends Component {
  render () {
    let {
      connectDropTarget,
      className,
      childComponents,
      isPreview
    } = this.props;

    return (<div className={ isPreview ? "preview-container" : "preview-container hide"}>
      <div className="ds-preview">
      {
        childComponents.map((item, index) => {
          let { ctype, cid, pid } = item;
          let ItemComponent = Components[ctype];
          return <ItemComponent key={cid} index={index} pid={pid} {...item} />;
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
