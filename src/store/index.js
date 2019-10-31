import { createStore } from 'redux';
import notedApp from '../reducers';

const store = createStore(notedApp);

export default store;