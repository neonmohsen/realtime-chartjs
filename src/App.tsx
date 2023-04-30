import { useSelector } from 'react-redux';
import './index.css';
import Client from "./utils/socket"
import { SinglePrice } from './types';

function App() {
  const prices = useSelector((state: SinglePrice[]) => state)
  // call socket Class
  const client = Client.instance

  return (
    <div className="App">
    </div>
  );
}

export default App;
