import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import actions from './counter-actions';

const valueReducer = createReducer(0, {
  [actions.increment]: (state, { payload }) => state + payload,
  [actions.decrement]: (state, { payload }) => state - payload,
});

const stepReducer = createReducer(5, {
  step: state => state,
});

const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});

export default counterReducer;

// import { combineReducers } from 'redux';
// import actionsTypes from './counter-types';

// const valueReducer = (state = 0, { type, payload }) => {
//   switch (type) {
//     case actionsTypes.INCREMENT:
//       return state + payload;

//     case actionsTypes.DECREMENT:
//       return state - payload;

//     default:
//       return state;
//   }
// };

// const stepReducer = (state = 5, action) => state;

// const counterReducer = combineReducers({
//   value: valueReducer,
//   step: stepReducer,
// });

// export default counterReducer;
