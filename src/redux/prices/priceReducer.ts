import { ReduxAction, SinglePrice } from "../../types";
import { SAVE_PRICES } from "./actionTypes";
const initialState: SinglePrice[] = [];
export const MAX_PRICES_LENGTH = 50;

const priceReducer = (state = initialState, action: ReduxAction) => {
  switch (action.type) {
    case SAVE_PRICES: {
      const newPrice = action.payload;
      let newPrices;

      if (state.length < MAX_PRICES_LENGTH) {
        newPrices = [...state, newPrice];
      } else {
        newPrices = [...state.slice(1), newPrice];
      }

      return newPrices;
    }

    default:
      return state;
  }
};

export default priceReducer;
