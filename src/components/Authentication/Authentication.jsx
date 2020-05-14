import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logomark.png";

export const Login = () => {
  const { register, handleSubmit } = useForm();

  const submitForm = (data) => {};

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-sm-6 col-xs-12 full-page-height centered-flex">
          <div className="col-lg-5 col-sm-10 col-xs-12 center-text">
            <form onSubmit={handleSubmit(submitForm)}>
              <div className="app-form-row">
                <img src={logo} alt="" srcset="" />
                <span className="login-notice text-vla block">Applicant Portal </span>
              </div>
              <div className="app-form-row">
                <span className="login-notice text-vla">Enter your Login Credentials</span>
              </div>

              <div className="app-form-row">
                <input type="text" name="emailAddress" className="login-input" placeholder="Email address" ref={register({ required: true })} />
              </div>
              <div className="app-form-row">
                <input type="password" name="password" className="login-input" placeholder="Password" ref={register({ required: true })} />
              </div>
              <div className="app-form-row right-text">
                <span className="subtitle">
                  Forgot your password? &nbsp;
                  <Link to="/forgot-password">
                    <span className="bold text-vla ">Recover it</span>
                  </Link>
                </span>
              </div>
              <div className="app-form-row">
                <button type="submit" className="login-button text-white bg-orange bold uppercase">
                  Login
                </button>
              </div>
              <div className="app-form-row">
                <span className="subtitle">
                  Dont have an account yet?{" "}
                  <Link to="/sign-up">
                    <span className="bold text-vla">Create and account</span>
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6 col-sm-6 col-xs-12 full-page-height bg-login"></div>
      </div>
    </div>
  );
};

export const SignUp = () => {
  return (
    <div>
      <h1>Forgot password</h1>
    </div>
  );
};
export const ForgotPassword = () => {
  return (
    <div>
      <h1>Forgot password</h1>
    </div>
  );
};

export const SetPassword = () => {
  return (
    <div>
      <h1>Set password</h1>
    </div>
  );
};

export const DisplayMessage = () => {
  return (
    <div>
      <h1>Message</h1>
    </div>
  );
};
