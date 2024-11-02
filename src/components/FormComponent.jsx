import React, { useState } from 'react';

function FormComponent() {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
  };

  const validateForm = () => {
    const errors = {};
    if (formValues.password !== formValues.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 rounded shadow bg-success border border-4 border-black mx-auto" style={{ width: '100%', padding: '2rem 4rem' }}>
      <div className="row">
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label fw-bold">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formValues.firstName}
            onChange={handleInputChange}
            className="form-control w-100"
            placeholder="First Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label fw-bold">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formValues.lastName}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Last Name"
          />
        </div>
      </div>
      
      <div className="mb-3">
        <label htmlFor="email" className="form-label fw-bold">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formValues.email}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label fw-bold">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formValues.password}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Password"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label fw-bold">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={formValues.confirmPassword}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Confirm Password"
        />
        {formErrors.confirmPassword && (
          <div className="text-danger mt-1">
            {formErrors.confirmPassword}
          </div>
        )}
      </div>
      
      <button type="submit" className="mt-4 fw-bold btn btn-danger w-100">
        Submit
      </button>
    </form>
  );
}

export default FormComponent;
