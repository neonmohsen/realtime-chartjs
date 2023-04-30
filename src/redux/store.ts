import { createStore } from "redux";
import priceReducer from "./prices/priceReducer";

const store = createStore(priceReducer);

export default store;
