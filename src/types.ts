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
  time: string;
}

export interface ReduxAction {
  payload: SinglePrice;
  type: string;
}

// export interface ChartPropsType {

// }
