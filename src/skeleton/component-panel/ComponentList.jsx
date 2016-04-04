import React, {Component} from 'react';
import ComponentTemplate from './ComponentTemplate.jsx';

class ComponentList extends Component {
  render () {
    let {data} = this.props;
    let ComponentNodes = data.map((component)=> {
      let {cid, label} = component;
      return (<ComponentTemplate key={cid} cid={cid} label={label}/>);
    });
    return (
      <ul>
        {ComponentNodes}
      </ul>
    );
  }
}

export default ComponentList;
