let nextCId = 0;
export const addComponent = (ctype) => {
  return {
    type: 'COMPONENT_ADD',
    cid: nextCId ++,
    ctype: ctype
  }
}
