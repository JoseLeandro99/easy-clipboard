import { createStore } from 'redux';

import clipboardReducer from './modules/clipboard/reducer';

const store = createStore(clipboardReducer);

export default store;
