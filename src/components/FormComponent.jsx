import React, { useState } from "react";

const FormComponent = () => {
  const [firstname, setFirstname] = useState("");
  const [secondname, setSecondname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const [firstnameError, setFirstnameError] = useState(false);
  const [secondnameError, setSecondnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submission attempt");

    setFirstnameError(firstname === "");
    setSecondnameError(secondname === "");
    setEmailError(email === "");
    setPasswordError(password === "");
    setConfirmPasswordError(confirmPassword === "");
    setPasswordMatchError(password !== confirmPassword);

    if (firstname && secondname && email && password && confirmPassword && password === confirmPassword) {
      console.log("Form submitted with:");
      console.log("First Name:", firstname);
      console.log("Second Name:", secondname);
      console.log("Email:", email);
      console.log("Password:", password);

    } else {
      console.log("Form submission failed due to missing fields or password mismatch");
    }
  };

  return (
    <div style={{ width: "700px", margin: "0 auto", padding: "20px" }}>

      <form onSubmit={handleSubmit} className="p-5 rounded-4 shadow bg-success border border-4 border-black mx-auto ">
        <div className="mb-3">
          <label className="form-label fw-bold">First Name</label>
          <input
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
              if (firstnameError) setFirstnameError(false);
            }}
            type="text"
            placeholder="Enter your first name"
            className="form-control border border-2 border-black"
          />
          {firstnameError && <small className="text-danger fs-5">First name is required</small>}
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Second Name</label>
          <input
            value={secondname}
            onChange={(e) => {
              setSecondname(e.target.value);
              if (secondnameError) setSecondnameError(false);
            }}
            type="text"
            placeholder="Enter your second name"
            className="form-control border border-2 border-black"
          />
          {secondnameError && <small className="text-danger fs-5">Second name is required</small>}
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Email</label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailError) setEmailError(false);
            }}
            type="email"
            placeholder="Enter your email"
            className="form-control border border-2 border-black"
          />
          {emailError && <small className="text-danger fs-5">Email is required</small>}
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Password</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (passwordError) setPasswordError(false);
            }}
            type="password"
            placeholder="Enter your password"
            className="form-control border border-2 border-black"
          />
          {passwordError && <small className="text-danger fs-5">Password is required</small>}
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Confirm Password</label>
          <input
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              if (confirmPasswordError) setConfirmPasswordError(false);
              if (passwordMatchError) setPasswordMatchError(false);
            }}
            type="password"
            placeholder="Confirm your password"
            className="form-control border border-2 border-black"
          />
          {confirmPasswordError && <small className="text-danger">Confirm password is required</small>}
          {passwordMatchError && <small className="text-danger fs-5">Passwords do not match</small>}
        </div>
        <button type="submit" className="btn btn-danger w-100 fw-bold mt-3">
          Register
        </button>
      </form>
    </div>
  );
};

export default FormComponent;