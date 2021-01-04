import { useEffect, useState } from 'react';
import { getStarShips } from './services/sw-api'

import './App.css';




function App() {

  const [starShipData, setStarShipData] = useState({
    count: 0,
    next: null,
    previous: null,
    results: []
  })

  async function getAppData() {
    const data = await getStarShips();
    console.log(data)
    await setStarShipData(data)
  }

  useEffect(() => {
    getAppData();
    console.log('effect');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Star Wars</h1>
      </header>
      <div className="starship-flex">
        {starShipData.results.map((starShip, i) => (
          <div className="starship" key={i}>{starShip.name}</div>
        ))}
      </div>
    </div>
  );
}
export default App;
// take results array, map over objects in the array
// then produce a starship card for every one of the components

// create another component card for starship card export it import it into the app 