import React from 'react';

const TripResult = ({ result }) => {
  if (!result) return null;

  return (
    <div className="trip-result">
      <h2>Your Weekend Trip Suggestion:</h2>
      <div className="result-card">
        <p>{result.suggestion}</p>
      </div>
    </div>
  );
};

export default TripResult;
