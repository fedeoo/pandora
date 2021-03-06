import React, {Component, PropTypes} from 'react';

const propTypes = {
  size: PropTypes.string,
  title: PropTypes.string
};

const defaultProps= {
  size: '1',
  title: 'Heading'
};

class Heading extends Component {
  render () {
    let {title, size = 1} = this.props;
    let CurrentHeading = `h${size}`;
    if (!CurrentHeading) {
      throw new Error(`can't find heading size of ${size}`);
    }
    return (<CurrentHeading>{title}</CurrentHeading>);
  }
}

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
