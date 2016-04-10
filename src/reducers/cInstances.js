import _ from 'lodash';
import Immutable from 'immutable';
import Components from '../components';

const addComponent = (cInstances, payload) => {
  cInstances = cInstances.updateIn([payload.pid, 'childIds'], (childIds) => {
    return childIds.push(payload.cid);
  });
  let defaultData = Immutable.fromJS(Components[payload.ctype].defaultProps);
  let newComponent = Immutable.fromJS({
    ctype: payload.ctype,
    cid: payload.cid,
    pid: payload.pid,
    data: {},
    childIds: []
  });
  newComponent = newComponent.set('data', defaultData);
  return cInstances.setIn([payload.cid], newComponent);
};

const hoverComponent = (cInstances, payload) => {
  let lastComponent = cInstances.find((item) => {
    return item.get('isHover');
  });
  if (lastComponent && lastComponent.get('cid') !== payload.cid) {
    cInstances = cInstances.setIn([lastComponent.get('cid'), 'isHover'], false);
  }
  return cInstances.setIn([payload.cid, 'isHover'], true);
};

const selectComponent = (cInstances, payload) => {
  let lastComponent = cInstances.find((item) => {
    return item.get('isSelected');
  });
  if (lastComponent && lastComponent.get('cid') !== payload.cid) {
    cInstances = cInstances.setIn([lastComponent.get('cid'), 'isSelected'], false);
  }
  return cInstances.setIn([payload.cid, 'isSelected'], true);
}

const changeComponent = (cInstances, payload) => {
  return cInstances.updateIn([payload.cid, 'data'], (orgData) => {
    return orgData.merge(Immutable.Map(payload.data))
  });
}

const moveComponent = (cInstances, payload) => {
  return cInstances.updateIn([payload.pid, 'childIds'], (childIds) => {
    let childIds2 = childIds.delete(payload.index);
    if (Immutable.Set(childIds2).has(payload.cid)) {
      console.log(payload);
      return childIds;
      // debugger;
    }
    return childIds2.insert(payload.desIndex, payload.cid);
  });

};

const initialState = Immutable.fromJS({
  'cid-0': {
    ctype: 'Stage',
    cid: 0,
    childIds: []
  }
});

const cInstances = (state = initialState, action) => {
  let payload = action.payload;
  switch (action.type) {
    case 'COMPONENT_ADD':
      return addComponent(state, payload);

    case 'COMPONENT_HOVER':
      return hoverComponent(state, payload);

    case 'COMPONENT_SELECT':
      return selectComponent(state, payload);

    case 'COMPONENT_CHANGE':
      return changeComponent(state, payload);

    case 'COMPONENT_MOVE':
      return moveComponent(state, payload);

    case 'COMPONENT_REMOVE':
      // getAllDescendantIds

    default:
      return state;
  }
}

export default cInstances;
