import { useEffect } from 'react';
import './App.css';
import Client from "./utils/socket"

function App() {
  const client = Client.instance

  useEffect(() => {
    //get state
    console.log("dggdg")
  }, []);

  return (
    <div className="App"></div>
  );
}

export default App;
