export interface ChartDataType {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string;
    borderColor: string;
  }[];
}

export interface SinglePrice {
  USD: number;
  time: number;
}

export interface ReduxAction {
  payload: SinglePrice;
  type: string;
}

export interface ChartPropsType {
  prices: SinglePrice[];
  // height: string;
}
