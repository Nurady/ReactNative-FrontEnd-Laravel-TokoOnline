// import {applyMiddleware, createStore} from 'redux';
// import thunk from 'redux-thunk';
// import reducer from './reducer';

// // memerlukan reducer, reducer adalah kumpulan state2 
// // redux thunk, sebagai middleware, untuk menghandle asynchronous

// const store = createStore(reducer, applyMiddleware(thunk));
// export default store;

import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

export const store = createStore(reducer, applyMiddleware(thunk));

// export default store;
