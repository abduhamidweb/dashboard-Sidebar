import React from "react";
import { Link } from "react-router-dom";
import userEmail from '../../assets/email.svg';
import userName from '../../assets/user.svg';
import userPassword from '../../assets/lock.svg';
import userPhoneNumber from '../../assets/phone.svg';
import "./Registration.css";

const Registration = () => {
  return (
    <div className="col-md-6 col-lg-6 d-flex flex-column align-items-center justify-content-center check-box">
      <h3>Checker Registration</h3>

      <form
        className="needs-validation d-flex flex-column align-items-center justify-content-center mt-3"
        noValidate
        autoComplete="off"
      >
        <div className="row g-4 justify-content-center">
          <div className="col-sm-7">
            <div className="input-group">
              <div className="input-group-text"><img src={userName} alt="first name logo" /></div>
              
            <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="First Name"
                required
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

          </div>
          <div className="col-sm-7">
            <div className="input-group">
              <div className="input-group-text"><img src={userName} alt="first name logo" /></div>
              
            <input
              type="text"
              className="form-control"
              id="middleName"
              placeholder="Middle Name"
              required
            />
            <div className="invalid-feedback">
              Valid middle name is required.
            </div>
            </div>
          </div>
          <div className="col-sm-7">

          <div className="input-group">
              <div className="input-group-text"><img src={userName} alt="first name logo" /></div>
              
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
              required
            />
            <div className="invalid-feedback">Valid last name is required.</div>
            </div>

          </div>
          <div className="col-sm-7">

            <div className="input-group">
              <div className="input-group-text"><img src={userEmail} alt="first name logo" /></div>
              
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
            />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
            </div>

          </div>
          <div className="col-sm-7">
            
            <div className="input-group">
              <div className="input-group-text"><img src={userPassword} alt="first name logo" /></div>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
            <div className="invalid-feedback">
              Please enter a valid password for shipping updates.
            </div>
              
            </div>

          </div>
          <div className="col-sm-7">

            <div className="input-group">
              <div className="input-group-text"><img src={userPhoneNumber} alt="first name logo" /></div>
            <input
              type="tel"
              className="form-control"
              id="tel"
              placeholder="Phone Number"
            />
            <div className="invalid-feedback">
              Please valid phone number for shipping updates.
            </div>
              
            </div>

          </div>
          <div className="col-sm-7">

            <div className="input-group">
              <div className="input-group-text">ထ</div>
              <input
              type="number"
              className="form-control"
              id="numberOfProblemSets"
              placeholder="Max Number Problem Sets"
            />
            <div className="invalid-feedback">
              Please enter valid max number of problem sets in this input for
              shipping updates.
            </div>
            </div>
          </div>
        </div>
        <div className="col-sm-7 mt-3">
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </div>
        <div className="col-sm-7 mt-3 text-end">
          <Link to="/login" className="text-decoration-none">
            Already registered ?
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Registration;

