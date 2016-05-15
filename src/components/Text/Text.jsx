import ContentEditable from 'react-contenteditable';
import React, { Component } from 'react';

const defaultProps = {
  content: '双击编辑文本'
};

class Text extends Component {
  render() {
    const { tagName, content, onChange } = this.props;
    return (<ContentEditable tagName={tagName} html={content} disabled={!this.context.isEditable} onChange={onChange} />);
  }
}

Text.contextTypes = {
  isEditable: React.PropTypes.bool
};
Text.defaultProps = defaultProps;

export default Text;
