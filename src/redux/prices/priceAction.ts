import { SinglePrice } from "../../types";
import { SAVE_PRICES } from "./actionTypes";

export function savePrices(data: SinglePrice) {
  // JsTime = rubyTime * 1000
  const time = new Date(+data.time * 1000).toLocaleTimeString();
  const updatedPrice = {
    USD: data.USD,
    time,
  };

  return {
    type: SAVE_PRICES,
    payload: updatedPrice,
  };
}
