import { DECREMENT, INCREMENT } from "./actions";

const initialState = {
  value: 0,
};

export default function addReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}
