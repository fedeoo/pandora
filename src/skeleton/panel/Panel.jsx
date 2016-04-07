import React, {Component} from 'react';
import './panel.scss';

class Panel extends Component {

  render () {
    let {
      children,
      className = '',
      heading,
      style,
      ...other,
    } = this.props;
    className += ' panel';
    return (
      <div {...other} className={className} style={style}>
        <div className="panel-heading">{heading}</div>
        <div className="panel-body">
          {children}
        </div>
      </div>
    );
  }
}

export default Panel;
