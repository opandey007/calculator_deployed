import { createStore } from 'redux';
import { calculatorReducer } from '../reducer/calculatorReducer';
export const store = createStore(calculatorReducer);
