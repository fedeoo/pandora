import _ from 'lodash';
import Components from '../components';

const addComponent = (cInstances, action) => {
  let { payload } = action;
  let parentComponent = cInstances[payload.pid];
  if (!parentComponent) {
    throw new Error(`COMPONENT_ADD: can't find parentComponent width cid ${payload.pid}·`);
  }
  // let data = _.clone(Components[payload.ctype].defaultProps);
  parentComponent.childComponents = [...parentComponent.childComponents, payload.cid];
  let newComponent = {
    ctype: payload.ctype,
    cid: payload.cid,
    data: {}
  };
  return _.merge({}, cInstances, {[payload.cid]: newComponent});
};

const hoverComponent = (cInstances, action) => {
  let { payload } = action;
  _.each(cInstances, (item) => {
    _.merge({}, item, {isHover: false});
  });
  let currentComponent = cInstances[payload.cid];
  currentComponent = _.merge({}, currentComponent, {isHover: true});
  return _.merge({}, cInstances, {[payload.cid]: currentComponent});
};

const selectComponent = (cInstances, action) => {
  let { payload } = action;
  let ret = {};
  _.each(cInstances, (item, key) => {
    ret[key] = _.merge({}, item, {isSelected: false});
  });
  let currentComponent = cInstances[payload.cid];
  currentComponent = _.merge({}, currentComponent, {isSelected: true});
  return _.merge(ret, {[payload.cid]: currentComponent});
}

const changeComponent = (cInstances, action) => {
  let { payload } = action;
  let currentComponent = cInstances[payload.cid];
  currentComponent.data = _.merge({}, currentComponent.data, payload.data);
  currentComponent = _.merge({}, currentComponent);
  return _.merge({}, cInstances, {[payload.cid]: currentComponent});
}

const cInstances = (state = {}, action) => {
  switch (action.type) {
    case '@@redux/INIT': // it's not recommend way.
      return {
        0: {
          ctype: 'Stage',
          cid: 0,
          childComponents: []
        }
      };

    case 'COMPONENT_ADD':
      return addComponent(state, action);

    case 'COMPONENT_HOVER':
      return hoverComponent(state, action);

    case 'COMPONENT_SELECT':
      return selectComponent(state, action);

    case 'COMPONENT_CHANGE':
      return changeComponent(state, action)

    case 'COMPONENT_REMOVE':
      // getAllDescendantIds

    default:
      return state;
  }
}

export default cInstances;
