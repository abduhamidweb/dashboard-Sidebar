import React from "react";
import { Link } from "react-router-dom";
import userEmail from "../../assets/email.svg";
import userPassword from "../../assets/lock.svg";
import "./Login.css";

const Login = () => {
  return (
    <div className="col-md-6 col-lg-6 d-flex flex-column align-items-center justify-content-center check-box">
      <h3>Checker Login</h3>

      <form
        className="needs-validation d-flex flex-column align-items-center justify-content-center mt-3"
        noValidate
        autoComplete="off"
      >
        <div className="row g-4 justify-content-center">
          <div className="col-sm-7">
            <div className="input-group input-group-lg">
              <div className="input-group-text">
                <img src={userEmail} alt="first name logo" />
              </div>

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
            <div className="input-group input-group-lg">
              <div className="input-group-text">
                <img src={userPassword} alt="first name logo" />
              </div>
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
        </div>
        <div className="col-sm-7 mt-3">
          <button type="submit" className="btn btn-primary w-100 btn-lg">
            Login
          </button>
        </div>
        <div className="col-sm-7 mt-3 d-flex justify-content-between">
          <Link to="/register" className="text-decoration-none">
            Haven't registered yet ?
          </Link>
          <Link to="/newpassword" className="text-decoration-none">
            Forgot your password ?
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
