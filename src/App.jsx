import React, { useState } from 'react';
import TripForm from './Components/TripForm';
import TripResult from './Components/TripResult';
import { tripRules } from './data/rules';

const App = () => {
  const [result, setResult] = useState(null);

  const handleFormSubmit = (formData) => {
    // Backward chaining logic: find the rule that satisfies the goal
    const match = tripRules.find(rule =>
      rule.goal === formData.goal &&
      rule.nature === formData.nature &&
      rule.budget === formData.budget &&
      rule.travelTime === formData.travelTime
    );

    setResult(match || { suggestion: "No match found — try different options! 🧭" });
  };

  return (
    <div className="App">
      <h1>🌍 Weekend Trip Picker</h1>
      <TripForm onSubmit={handleFormSubmit} />
      <TripResult result={result} />
    </div>
  );
};

export default App;

