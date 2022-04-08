import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addTodo = createAction('todos/add', text => ({
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
}));
const deleteTodo = createAction('todos/delete');
const changeFilter = createAction('todos/filter');
const toggleCompleted = createAction('todos/toggle');

export default {
  addTodo,
  deleteTodo,
  changeFilter,
  toggleCompleted,
};

// const addTodo = text => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     text,
//     completed: false,
//   },
// });

// const deleteTodo = todoId => ({
//   type: types.DELETE,
//   payload: todoId,
// });

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });
