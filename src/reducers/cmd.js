import Immutable from 'immutable';
const initialState = Immutable.fromJS({
  isPreview: false
});

const cmd = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_PREVIEW':
      return state.set('isPreview', !state.get('isPreview'));
    default:
    return state;
  }
};

export default cmd;
