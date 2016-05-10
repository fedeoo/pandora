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
    return connectDragSource(
      <li key={ctype} className={cx('component-item')} data-ctype={ctype}>
        <div ctype={ctype} className={cx(`icon-${ctype}`)}></div>
        <div className="label">{label}</div>
    </li>
    );
  }
}

export default ComponentTemplate;
