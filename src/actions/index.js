const rootCid = 'cid-0';
let nextCId = 1;
export const addComponent = (ctype, pid) => {
  nextCId ++
  return {
    type: 'COMPONENT_ADD',
    payload: {
      pid: pid || rootCid,
      cid: 'cid-' + nextCId,
      ctype: ctype
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

export const changeComponent = (data) => {
  return {
    type: 'COMPONENT_CHANGE',
    payload: data
  };
}
