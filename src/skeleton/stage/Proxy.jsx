import _ from 'lodash';

import Components from '../../components';
import ComponentWrapper from './ComponentWrapper.jsx';
import ContainerWrapper from './ContainerWrapper.jsx';
import { isContainer } from '../../helper.js';

let ProxyComponents = {};
_.each(Components, (PerComponent, componentName) => {
  if (isContainer(PerComponent)) {
    PerComponent = ContainerWrapper(PerComponent);
  }
  ProxyComponents[componentName] = ComponentWrapper(PerComponent);

});

export default ProxyComponents;
