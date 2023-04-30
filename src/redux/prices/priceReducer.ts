import { ReduxAction, SinglePrice } from "../../types";
import { SAVE_PRICES } from "./actionTypes";
const initialState: SinglePrice[] = [
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
  { USD: 0, time: "0" },
];

const priceReducer = (state = initialState, action: ReduxAction) => {
  console.log(action);
  switch (action.type) {
    case SAVE_PRICES: {
      let updatedState: SinglePrice[] = [...state];
      updatedState.push(action.payload);
      return updatedState.slice(-50);
    }

    default:
      return state;
  }
};

export default priceReducer;
