import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [feet, setFeet] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const weightFloat = parseFloat(weight);
    const heightInInches = parseFloat(feet) * 12;
    const heightFloat = heightInInches * 0.0254; // Convert height to meters
    if (!isNaN(weightFloat) && !isNaN(heightFloat) && weightFloat > 0 && heightFloat > 0) {
      const bmiValue = (weightFloat / (heightFloat * heightFloat)).toFixed(2);
      setBMI(bmiValue);
    } else {  
      setBMI(null);
    }
  };
     
  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <div className="input-container">
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="feet">Height (feet):</label>
        <input
          type="number"
          id="feet"
          value={feet}
          onChange={(e) => setFeet(e.target.value)}
          required
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && <p className="result">Your BMI is: {bmi}</p>}
      {bmi === null && <p className="error">Please enter valid weight and height.</p>}
    </div>
  );
}

export default App;
