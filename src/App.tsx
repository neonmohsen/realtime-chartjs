import { useSelector } from "react-redux";
import "./index.css";
import Client from "./utils/socket";
import LineChart from "./components/LineChart";
import { SinglePrice } from "./types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import BarChart from "./components/BarChart";
import AreaChart from "./components/AreaChart";
import ScatterChart from "./components/ScatterChart";
import LineChart1 from "./components/LineChart1";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const prices = useSelector((state: SinglePrice[]) => state);
  // const [chartData, setChartDate] = useState<ChartDataType | null>(null);
  // call socket Class
  const client = Client.instance;

  return (
    <div className="App">
      <h1 className="chartHeader">{`last 50 prices of USD at: ${new Date().toLocaleDateString()}`}</h1>

      <div className="chartContainer">
        <div className="chartItem">
          <LineChart prices={prices} />
        </div>

        <div className="chartItem">
          <AreaChart prices={prices} />
        </div>
        <div className="chartItem">
          <ScatterChart prices={prices} />
        </div>
        <div className="chartItem">
          <BarChart prices={prices} />
        </div>
        <div className="chartItem">
          <LineChart1 />
        </div>
      </div>
    </div>
  );
}

export default App;
