import { INCREMENT } from './actions';
export interface IAppstate {
  counter: number;
}

export const INITIAL_STATE = {
  counter: 0
}

export function rootReducer(state, action) {
  switch (action.type) {
    case INCREMENT: return { counter: state.counter + 1 };
  }
  return state;
}