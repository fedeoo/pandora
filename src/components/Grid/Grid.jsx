import React, {Component, PropTypes} from 'react';
import Container from '../Container';
import './grid.scss';

const propTypes = {
  childCount: PropTypes.number
};
const defaultProps = {
  childCount: 2
};
class Grid extends Container {
  getChildBlocks() {
    let {childCount = 2} = this.props;
    let gridNum = 12 / childCount;
    let clz = `col-${gridNum}`;
    return _.map(Array(childCount), (v, index) => {
      return (<div key={index} className={clz}/>)
    });
  }
  render() {
    return (<div className="row">
      {
        this.getChildBlocks()
      }
    </div>);
  }
}

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
