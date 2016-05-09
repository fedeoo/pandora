import React, { Component, PropTypes } from 'react';
import Container from '../Container';
import _ from 'lodash';
import './block.scss';

const propTypes = {
  childCount: PropTypes.number,
  heigth: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  background: PropTypes.string,
  border: PropTypes.string
};

const defaultProps= {
  childCount: 1,
  height: 'auto',
  margin: 'auto',
  padding: '0',
  background: 'none',
  border: 'none'
};

class Block extends Container {
  getChildBlocks() {
    return [(<div />)];
  }
  render() {
    let blockStyle = _.pick(this.props, ['height','margin','padding','background','border']);
    return (<div className="ds-block" style={blockStyle}>
      {
        this.getChildBlocks()
      }
    </div>);
  }
}

Block.propTypes = propTypes;
Block.defaultProps = defaultProps;

export default Block;
