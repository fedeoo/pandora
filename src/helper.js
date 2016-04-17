import Container from './components/Container.jsx';
import _ from 'lodash';

const isContainer = (ConponentType) => {
  return _.isFunction(ConponentType)  && new ConponentType() instanceof Container;
};

export { isContainer };

export default {
  isContainer
};
