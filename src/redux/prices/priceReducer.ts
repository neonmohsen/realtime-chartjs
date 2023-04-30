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
  switch (action.type) {
    case SAVE_PRICES: {
      return [...state, { ...action.payload }].slice(-50);
    }

    default:
      return state;
  }
};

export default priceReducer;
