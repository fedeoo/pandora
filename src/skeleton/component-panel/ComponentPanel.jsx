import React, {Component} from 'react';
import { Panel } from '../../components';
import {connect} from 'react-redux';
import classNames from 'classnames/bind';

import ComponentList from './ComponentList.jsx';

import styles from './component-panel.scss';

const cx = classNames.bind(styles);

function mapState (state) {
  let defaultList = [{
    ctype: 'Heading',
    label: 'Heading'
  }, {
    ctype: 'Grid',
    label: 'Grid'
  }, {
    ctype: 'Button',
    label: 'Button'
  }, {
    ctype: 'ProductBanner',
    label: 'ProductBanner'
  }, {
    ctype: 'VisualSteps',
    label: 'VisualSteps'
  }];
  let { mountedComponents = defaultList } = state;
  return {mountedComponents};
}

class ComponentPanel extends Component {
  render() {
    let { mountedComponents } = this.props;
    return <Panel heading="Components" className={cx('ds-component-panel')}>
      <ComponentList data={mountedComponents}/>
    </Panel>
  }
}

export default connect(mapState)(ComponentPanel);
