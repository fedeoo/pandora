import _ from 'lodash';
import Components from '../components';

const addComponent = (activeComponents, action) => {
  let { payload } = action;
  let parentComponent = activeComponents[payload.pid];
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
  return _.merge({}, activeComponents, {[payload.cid]: newComponent});
};

const hoverComponent = (activeComponents, action) => {
  let { payload } = action;
  _.each(activeComponents, (item) => {
    _.merge({}, item, {isHover: false});
  });
  let currentComponent = activeComponents[payload.cid];
  currentComponent = _.merge({}, currentComponent, {isHover: true});
  return _.merge({}, activeComponents, {[payload.cid]: currentComponent});
};

const selectComponent = (activeComponents, action) => {
  let { payload } = action;
  let ret = {};
  _.each(activeComponents, (item, key) => {
    ret[key] = _.merge({}, item, {isSelected: false});
  });
  let currentComponent = activeComponents[payload.cid];
  currentComponent = _.merge({}, currentComponent, {isSelected: true});
  return _.merge(ret, {[payload.cid]: currentComponent});
}

const changeComponent = (activeComponents, action) => {
  let { payload } = action;
  let currentComponent = activeComponents[payload.cid];
  currentComponent.data = _.merge({}, currentComponent.data, payload.data);
  currentComponent = _.merge({}, currentComponent);
  return _.merge({}, activeComponents, {[payload.cid]: currentComponent});
}

const component = (state = {}, action) => {
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

export default component;
