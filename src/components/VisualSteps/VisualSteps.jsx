import React, { Component, PropTypes } from 'react';
import Widget from '../Widget';
import Text from '../Text';
import Icon from '../Icon';

import classNames from 'classnames/bind';
import styles from './visual-steps.scss';
const cx = classNames.bind(styles);

const propTypes = _.extend({}, Widget.propTypes, {
  background: PropTypes.string,
  title: PropTypes.string,
  steps: PropTypes.array
});

const defaultProps = _.extend({}, Widget.defaultProps, {
  background: '#F7F7F',
  title: '使用流程',
  steps: [
    "Step 1",
    "Step 2",
    "Step 3"
  ]
});

class VisualSteps extends Widget {

  render() {
    let { title, steps = [], background } = this.props;
    let len = steps.length;
    let styles = {
      background
    };
    return (<div className={cx('steps')} style={styles}>
      <div className="layout">
        <Text tagName="h2" content={title} onChange={this.onPropertyChange.bind(this, 'title')} />
        <table className={cx('step-layout')}><tbody>
          <tr>
            {
              steps.map((step, index) => {
                return (<td key={index}>
                    { (index + 1) < len ? <Icon type="right" className={cx('icon-right')} /> : null }
                    <div><Icon type={`shuzi${index+1}`} className={cx('icon')} /></div>
                    <Text tagName="div" content={step} onChange={this.onPropertyChange.bind(this, 'step')} />
                </td>);
              })
            }
          </tr></tbody>
        </table>
      </div>
    </div>);
  }
}

VisualSteps.propTypes = propTypes;
VisualSteps.defaultProps = defaultProps;

export default VisualSteps;
