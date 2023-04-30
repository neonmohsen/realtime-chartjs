import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './index.css';
import Client from "./utils/socket"
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import { ChartDataType, SinglePrice } from './types';

function App() {
  const prices = useSelector((state: SinglePrice[]) => state)
  const [chartData, setChartDate] = useState<ChartDataType | null>(null)
  // call socket Class
  const client = Client.instance

  useEffect(() => {
    let updatedDataset: ChartDataType = {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: "blueViolet",
          borderColor: "#555555",
        },
      ],
    };

    responsivePointsSlicer(prices).map((item: SinglePrice) => {
      updatedDataset!.datasets[0].data = [...updatedDataset!.datasets[0].data, item.USD];
      updatedDataset!.labels = [...updatedDataset!.labels, item.time];
    });
    setChartDate(updatedDataset);
  }, [prices])


  const responsivePointsSlicer = (value: SinglePrice[]) => {
    if (window.innerWidth < 1000 && window.innerWidth > 700) {
      return value.slice(-30)
    } else if (window.innerWidth < 700) {
      return value.slice(-20)
    } else {
      return value
    }
  }

  return (
    <div className="App">
      {
        chartData &&
        <>
          <h1 className='chartHeader'>{`last 50 prices of USD at: ${new Date().toLocaleDateString()}`}</h1>

          <div style={{ height: "40vh" }}>
            <BarChart data={chartData} />
          </div>
          <div style={{ height: "40vh" }}>
            <LineChart data={chartData} />
          </div>
        </>
      }
    </div>
  );
}

export default App;
