import React, {Component} from 'react';
import _ from 'lodash';

import Conponents from '../../components';
import {hoverComponent, selectComponent} from '../../actions';

let ProxyComponents = {};
_.each(Conponents, (PerComponent, componentName) => {
  class Proxy extends Component {

    constructor() {
      super();

      this.handlerClick = this.handlerClick.bind(this);
      this.handlerOver = this.handlerOver.bind(this);
    }

    handlerClick() {
      let { dispatch } = this.props;
      dispatch(selectComponent(this.props.cid));
    }
    handlerOver () {
      let { dispatch } = this.props;
      // dispatch(hoverComponent(this.props.cid));
    }

    render() {
      let { isHover, isSelected } = this.props;
      let classList = ['ds-component-container'];
      isHover && classList.push('hover');
      isSelected && classList.push('selected');
      return (
        <div className={classList.join(' ')} onClick={this.handlerClick} onMouseOver={this.handlerOver}>
          <PerComponent {...this.props} />
          <div className="highlight-selector" />
          <div className="highlight" />
          <div className="ds-component-mask"></div>
        </div>
      );
    }
  }
  ProxyComponents[componentName] = Proxy;
});

export default ProxyComponents;
