import { createAction } from '@reduxjs/toolkit';

const increment = createAction('counter/increment');
const decrement = createAction('counter/decrement');

export default {
  increment,
  decrement,
};

// import actionsTypes from './counter-types';

// export const increment = value => ({
//   type: actionsTypes.INCREMENT,
//   payload: value,
// });

// export const decrement = value => ({
//   type: actionsTypes.DECREMENT,
//   payload: value,
// });
