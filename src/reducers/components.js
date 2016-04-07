const components = (activeComponents = [], action) => {
  switch (action.type) {
    case 'COMPONENT_ADD':
      let newComponent = {
        ctype: action.ctype,
        key: action.cid,
        data: {}
      };
      return [...activeComponents, newComponent];
    default:
      return activeComponents;
  }
}
export default components;
