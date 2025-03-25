import React, { useState } from 'react';

const TripForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    goal: "",
    nature: "",
    budget: "",
    travelTime: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="trip-form">
      <h2>🧭 Plan Your Weekend</h2>

      <label>What do you want this weekend to feel like?</label>
      <select name="goal" onChange={handleChange} required>
        <option value="">Select...</option>
        <option value="relax">Relax</option>
        <option value="explore">Explore</option>
        <option value="adventure">Adventure</option>
      </select>

      <label>Do you prefer nature or city?</label>
      <select name="nature" onChange={handleChange} required>
        <option value="">Select...</option>
        <option value="yes">Nature</option>
        <option value="no">City</option>
      </select>

      <label>Budget?</label>
      <select name="budget" onChange={handleChange} required>
        <option value="">Select...</option>
        <option value="$">$ (Low)</option>
        <option value="$$">$$ (Medium)</option>
        <option value="$$$">$$$ (High)</option>
      </select>

      <label>How far are you willing to travel?</label>
      <select name="travelTime" onChange={handleChange} required>
        <option value="">Select...</option>
        <option value="1-2h">1–2 hours</option>
        <option value="3-4h">3–4 hours</option>
      </select>

      <button type="submit">Find My Trip ✨</button>
    </form>
  );
};

export default TripForm;
