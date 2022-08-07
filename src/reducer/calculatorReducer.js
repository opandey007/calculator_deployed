import { evaluate } from 'mathjs';

export const calculatorReducer = function (state = { r: '' }, action) {
  console.log(state.r, action);
  switch (action.type) {
    case 'Concat':
      return { ...state, r: state.r + action.payload };
    case 'Eval':
      try {
        return { ...state, r: evaluate(state.r) };
      } catch (err) {
        return { ...state, r: 'Error' };
      }
    default:
      return {
        ...state,
        r: '',
      };
  }
};
