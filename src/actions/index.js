import Components from '../components';
import { isContainer } from '../helper';

const rootCid = 'cid-0';
let nextCId = 1;
export const addComponent = ({ ctype, pid }) => {
  let cid = nextCId ++;
  let childIds = [];
  if (isContainer(Components[ctype])) {
    let childCount = Components[ctype].defaultProps.childCount;
    while(childCount --) {
      childIds.push('cid-' + nextCId ++);
    }
  }
  return {
    type: 'COMPONENT_ADD',
    payload: {
      pid: pid || rootCid,
      cid: 'cid-' + nextCId,
      ctype: ctype,
      childIds: childIds
    }
  };
}

export const hoverComponent = (cid) => {
  return {
    type: 'COMPONENT_HOVER',
    payload: {
      cid
    }
  };
}

export const selectComponent = (cid) => {
  return {
    type: 'COMPONENT_SELECT',
    payload: {
      cid
    }
  };
}

export const changeComponent = (payload) => {
  return {
    type: 'COMPONENT_CHANGE',
    payload
  };
}

export const moveComponent = (payload) => {
  return {
    type: 'COMPONENT_MOVE',
    payload
  };
}

export const dragComponent = (payload) => {
  return {
    type: 'COMPONENT_DRAG',
    payload
  };
}
