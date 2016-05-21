import React, { Component, PropTypes } from 'react';
import Widget from '../Widget';
import Text from '../Text';

import classNames from 'classnames/bind';
import styles from './visual-docs.scss';

const cx = classNames.bind(styles);

const propTypes = {
  title: PropTypes.string,
};
const defaultProps = {
  background: '#F7F7F7',
  title: '帮助与文档',
  categories: [{
    title: '新手指南',
    links: [{
      title: '产品介绍',
      url: 'https://help.aliyun.com/document_detail/shujia/RE/intro/re-intro1.html'
    }, {
      title: '快速入门',
      url: 'https://help.aliyun.com/document_detail/shujia/RE/startup/re-startup-pre1.html'
    }]
  }, {
    img: 'https://img.alicdn.com/tps/TB1XsJdMFXXXXaWXFXXXXXXXXXX-313-315.png'
  }]
};

class VisualDocs extends Widget {

  render() {
    let { title, categories = [] } = this.props;
    return (<div className={cx('docs')}>
      <div className="layout clearfix">
        <Text tagName="h2" content={title} onChange={this.onPropChange.bind(this, 'title')} />
        {
          categories.map((category, index) => {
            return (<div className="col-3" key={index}>
              <div className={cx('card')}>
                {category.img ? <img src={category.img} alt="" /> : null }
                {category.title ? <Text tagName="h3" content={category.title} onChange={this.onPropChange.bind(this, `categories[${index}].title`)} /> : null}
                {
                  (category.links || []).map((link, linkIndex) => {
                    return (<p key={linkIndex}><a href={link.url} target="_blank">{link.title}</a></p>);
                  })
                }
              </div>
            </div>);
          })
        }
      </div>
    </div>);

  }
}

VisualDocs.propTypes = propTypes;
VisualDocs.defaultProps = defaultProps;

export default VisualDocs;
