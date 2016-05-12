import _ from 'lodash';
import Immutable from 'immutable';
import Components from '../components';

const addComponent = (cInstances, payload) => {
  cInstances = cInstances.updateIn([payload.pid, 'childIds'], (childIds) => {
    return childIds.push(payload.cid);
  });
  let defaultData = Immutable.fromJS(Components[payload.ctype].defaultProps);
  _.each(payload.childIds, (childId) => {
    cInstances = cInstances.setIn([childId], Immutable.fromJS({
      ctype: 'VirtualLayer',
      cid: childId,
      pid: payload.cid,
      data: {},
      childIds: []
    }));
  });
  let newComponent = Immutable.fromJS({
    ctype: payload.ctype,
    cid: payload.cid,
    pid: payload.pid,
    data: {},
    childIds: payload.childIds
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

/**
 * [move component: may be dispatch multiple times, care about dirty data]
 */
const moveComponent = (cInstances, payload) => {
  let srcChildIds = cInstances.getIn([payload.pid, 'childIds']);
  if (srcChildIds.get(payload.index) !== payload.cid) {
    return cInstances;
  }

  cInstances = cInstances.updateIn([payload.pid, 'childIds'], (childIds) => {
    return childIds.delete(payload.index);
  });

  let desChildIds = cInstances.getIn([payload.desCid, 'childIds']);
  if (Immutable.Set(desChildIds).has(payload.cid)) {
    return cInstances;
  }
  cInstances = cInstances.setIn([payload.cid, 'pid'], payload.desCid);
  return cInstances.updateIn([payload.desCid, 'childIds'], (childIds) => {
    return childIds.insert(payload.desIndex, payload.cid);
  });

};

const _removeChildIdOfParent = (cInstances, cid) => {
  let pid = cInstances.getIn([cid, 'pid']);
  return cInstances.updateIn([pid, 'childIds'], (childIds) => {
    if (_.isNil(childIds)) {
      return childIds;
    }
    let index = childIds.indexOf(cid);
    if (index > -1) {
      return childIds.delete(index);
    }
    return childIds;
  });
};

const _removeComponentCascade = (cInstances, cid) => {
  let childIds = cInstances.getIn([cid, 'childIds']);
  if (!_.isNil(childIds)) {
    childIds.forEach((childId) => {
      cInstances = _removeComponentCascade(cInstances, childId);
    });
  }
  return cInstances.delete(cid);
};

const removeComponent = (cInstances, payload) => {
  cInstances = _removeChildIdOfParent(cInstances, payload.cid);
  return _removeComponentCascade(cInstances, payload.cid);
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
      return removeComponent(state, payload);

    default:
      return state;
  }
}

export default cInstances;
