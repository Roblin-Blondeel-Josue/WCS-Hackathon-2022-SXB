import React, { useState, useEffect } from 'react';
import './App.css';
import AirQuality from './components/AirQuality';

function App() {
  const [city, setCity] = useState("");
  useEffect(()=>{
    setCity("Strasbourg ")
  },[])
  return (
    <div>
      <AirQuality city={city} />
    </div>
  );
}

export default App;
