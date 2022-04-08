import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo/todo-reducer';
import counterReducer from './counter/counter-reducer';
// import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    counter: counterReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;

// import { combineReducers, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import counterReducer from './counter/counter-reducer';
// import todoReducer from './todo/todo-reducer';

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   todos: todoReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
