import React, {Component} from 'react';

class Panel extends Component {

  render () {
    const {
      children,
      className,
      heading,
      style,
      ...other,
    } = this.props;

    return (
      <div {...other} className={className} style={style}>
        <div className="panel-heading">heading</div>
        <div className="panel-body">
          {children}
        </div>
      </div>
    );
  }
}

export default Panel;
