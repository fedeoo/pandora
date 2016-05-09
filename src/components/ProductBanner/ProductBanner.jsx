import React, { Component, PropTypes } from 'react';
import Widget from '../Widget';

import classNames from 'classnames/bind';
import styles from './product-banner.scss';
const cx = classNames.bind(styles);

const propTypes = _.extend({}, Widget.propTypes, {
  title: PropTypes.string,
  desc: PropTypes.string,
  btns: PropTypes.array
});

const defaultProps = _.extend({}, Widget.defaultProps, {
  background: '#000',
  title: '产品名称',
  desc: '产品描述',
  btns: []
});

class ProductBanner extends Widget {
  render() {
    let { background, title, desc='', btns=[] } = this.props;
    let styles = {
      background
    };
    return (<div className={cx('banner')} style={styles}>
      <div className="layout">
        <h1>{title}</h1>
        <p dangerouslySetInnerHTML={{__html: desc}} />
        <div className={cx('btn-bar')}>
        {
          btns.map((btn) => {
            return (<a href={btn.link} className={btn.className} target="_blank">{btn.name}</a>);
          })
        }
        </div>
      </div>
    </div>);
  }
}

ProductBanner.propTypes = propTypes;
ProductBanner.defaultProps = defaultProps;

export default ProductBanner;
