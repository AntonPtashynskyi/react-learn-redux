import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './todo-actions';

const itemsReducer = createReducer([], {
  [actions.addTodo]: (state, { payload }) => [...state, payload],
  [actions.deleteTodo]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [actions.toggleCompleted]: (state, { payload }) =>
    state.map(todo =>
      todo.id === payload ? { ...todo, completed: !todo.completed } : todo
    ),
});

const filterReducer = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const todoReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default todoReducer;

// import { combineReducers } from 'redux';
// import todoTypes from './todo-types';

// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case todoTypes.ADD:
//       return [...state, payload];

//     case todoTypes.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case todoTypes.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// const todoReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

// export default todoReducer;
