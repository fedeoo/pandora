import _ from 'lodash';

const components = (activeComponents = {}, action) => {
  switch (action.type) {
    case '@@redux/INIT':
      return {
        0: {
          ctype: 'Stage',
          key: 0,
          childComponents: []
        }
      };
    case 'COMPONENT_ADD':
      let {payload} = action;
      let parentComponent = activeComponents[payload.pid];
      if (!parentComponent) {
        throw new Error(`COMPONENT_ADD: can't find parentComponent width cid ${payload.pid}·`);
      }
      parentComponent.childComponents = [...parentComponent.childComponents, payload.cid];
      let newComponent = {
        ctype: payload.ctype,
        key: payload.cid,
        data: {}
      };
      return _.merge({}, activeComponents, {[payload.cid]: newComponent});
    default:
      return activeComponents;
  }
}
export default components;
