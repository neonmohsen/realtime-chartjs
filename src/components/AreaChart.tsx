import { ChartPropsType } from "../types";
import {
  Chart as ChartJS,
  BubbleController,
  PointElement,
  LinearScale,
  TimeScale,
} from "chart.js";
import StreamingPlugin from "chartjs-plugin-streaming";
import { Chart } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import { useEffect, useRef, useState } from "react";
import { MAX_PRICES_LENGTH } from "../redux/prices/priceReducer";

ChartJS.register(
  BubbleController,
  PointElement,
  LinearScale,
  TimeScale,
  StreamingPlugin
);

function BubbleChart({ prices }: ChartPropsType) {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<
    { x: number; y: number; r: number }[]
  >([]);

  useEffect(() => {
    const lastPrice = prices[prices.length - 1];

    if (lastPrice) {
      const newData = {
        x: lastPrice.time,
        y: lastPrice.USD,
        r: Math.random() * 10 + 2, // Random radius value for the bubble
      };

      // Update chartData based on newData, remove the first element if it reaches the limit
      setChartData((prevData) => {
        if (prevData.length >= MAX_PRICES_LENGTH) {
          prevData.shift();
        }
        return [...prevData, newData];
      });
    }
  }, [prices]);

  return (
    <Chart
      type="bubble"
      ref={chartRef}
      data={{
        datasets: [
          {
            label: "Dataset 1",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 1,
            data: chartData,
          },
        ],
      }}
      options={{
        scales: {
          x: {
            type: "realtime",
            realtime: {
              delay: 1000,
            },
          },
          //   y: {
          //     min: 0, // Set the minimum value for the y-axis
          //     max: 2, // Set the maximum value for the y-axis
          //   },
        },
      }}
    />
  );
}

export default BubbleChart;
