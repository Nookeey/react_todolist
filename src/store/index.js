import { createStore } from 'redux';
import notedApp from '../reducers';

const store = createStore(
  notedApp, /* preloadedState, */
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;