import React from 'react';
import FormComponent from './components/FormComponent';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 

function App() {
  return (
    <div className="App d-flex justify-content-center align-items-center vh-100 bg-warning-subtle">
      <div>
        <h1 className="text-center mb-5 fw-bold">Form Validation in React</h1>
        <FormComponent />
      </div>
    </div>
  );
}

export default App;

