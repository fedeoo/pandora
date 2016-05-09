import React, {Component} from 'react';
import {DragSource} from 'react-dnd';
import {ComponentTypes} from '../Constants.js';

import classNames from 'classnames/bind';
import styles from './component-panel.scss';

const cx = classNames.bind(styles);

const componentSource = {
  beginDrag(props) {
    return {
      ctype: props.ctype
    };
  }
};

@DragSource(ComponentTypes.INSTANCE, componentSource, (connect) => ({
  connectDragSource: connect.dragSource()
}))
class ComponentTemplate extends Component {
  render () {
    let {ctype, label, connectDragSource} = this.props;
    let iconClass = cx(`icon-${ctype}`);
    let clz = cx('component-item');
    return connectDragSource(
      <li key={ctype} className={clz} data-ctype={ctype}>
        <div ctype={ctype} className={iconClass}></div>
        <div className="label">{label}</div>
    </li>
    );
  }
}

export default ComponentTemplate;
