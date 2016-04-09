import _ from 'lodash';
import Immutable from 'immutable';
import Components from '../components';

const addComponent = (cInstances, action) => {
  let { payload } = action;
  cInstances = cInstances.updateIn([payload.pid, 'childIds'], (childIds) => {
    return childIds.push(payload.cid);
  });
  let newComponent = Immutable.fromJS({
    ctype: payload.ctype,
    cid: payload.cid,
    data: {},
    childIds: []
  });
  return cInstances.setIn([payload.cid], newComponent);
};

const hoverComponent = (cInstances, action) => {
  let { payload } = action;
  let lastComponent = cInstances.find((item) => {
    return item.get('isHover');
  });
  if (lastComponent && lastComponent.get('cid') !== payload.cid) {
    cInstances = cInstances.setIn([lastComponent.get('cid'), 'isHover'], false);
  }
  return cInstances.setIn([payload.cid, 'isHover'], true);
};

const selectComponent = (cInstances, action) => {
  let { payload } = action;
  let lastComponent = cInstances.find((item) => {
    return item.get('isSelected');
  });
  if (lastComponent && lastComponent.get('cid') !== payload.cid) {
    cInstances = cInstances.setIn([lastComponent.get('cid'), 'isSelected'], false);
  }
  return cInstances.setIn([payload.cid, 'isSelected'], true);
}

const changeComponent = (cInstances, action) => {
  let { payload } = action;
  return cInstances.updateIn([payload.cid, 'data'], (orgData) => {
    return orgData.merge(Immutable.Map(payload.data))
  });
}

const initialState = Immutable.fromJS({
  'cid-0': {
    ctype: 'Stage',
    cid: 0,
    childIds: []
  }
});

const cInstances = (state = initialState, action) => {
  switch (action.type) {
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
