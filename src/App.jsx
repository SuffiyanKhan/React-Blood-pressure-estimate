import React, { useState } from 'react';

function App() {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [estimatedSystolic, setEstimatedSystolic] = useState(0);
  const [estimatedDiastolic, setEstimatedDiastolic] = useState(0);

  const estimatePressure = () => {
    // Assume a simple estimation for demonstration purposes
    const estimatedSystolic = Math.floor((age / 10) + (weight / 10) + 100);
    const estimatedDiastolic = Math.floor((age / 20) + (weight / 20) + 60);
    setEstimatedSystolic(estimatedSystolic);
    setEstimatedDiastolic(estimatedDiastolic);
  };

  return (
    <div className="container">
      <div className="row mt-5 border rounded py-4 px-5">
      <h3 className='text-center mb-4'>Blood Pressure Estimation</h3>
      <div className='col-lg-6 col-md-12 col-sm-12 mt-3'>
        <label>Age:</label>
        <input className='form-control' placeholder='Age' type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div className='col-lg-6 col-md-12 col-sm-12 mt-3'>
        <label>Weight (in kg):</label>
        <input className='form-control' placeholder='Weight' type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div className="d-flex justify-content-center mt-5">
      <button className='btn btn-primary' onClick={estimatePressure}>Estimate Blood Pressure</button>
      </div>
      <div>
        <p className='fw-bold'>Estimated Systolic Pressure: {estimatedSystolic} mmHg</p>
        <p className='fw-bold'>Estimated Diastolic Pressure: {estimatedDiastolic} mmHg</p>
      </div>

      </div>
    </div>
  );
}

export default App;
