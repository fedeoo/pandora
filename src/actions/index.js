const rootCid = 0;
let nextCId = 1;
export const addComponent = (ctype, pid) => {
  return {
    type: 'COMPONENT_ADD',
    payload: {
      pid: pid || rootCid,
      cid: nextCId ++,
      ctype: ctype
    }
  }
}
