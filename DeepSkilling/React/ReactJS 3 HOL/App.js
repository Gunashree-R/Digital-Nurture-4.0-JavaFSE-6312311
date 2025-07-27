import React from 'react';
import './App.css';
import CalculatorScore from './Components/CalculatorScore';

function App() {
  return (
    <div className="App">
      <CalculatorScore Name="Aarav Sharma" School="Greenfield High" Total={460} Goal={5} />
    </div>
  );
}

export default App;
