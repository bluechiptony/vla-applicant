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
                  <Link to="/home">

                  Login
                  </Link>
                </button>
              </div>
              <div className="app-form-row">
                <span className="subtitle">
                  Dont have an account yet?{" "}
                  <Link to="/sign-up">
                    <span className="bold text-vla">Create an account</span>
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
                <span className="login-notice text-vla block">Create your account </span>
              </div>
              <div className="app-form-row">
                <span className="login-notice text-vla">Please fill the form below</span>
              </div>

              <div className="app-form-row">
                <input type="text" name="firstName" className="login-input" placeholder="First Name" ref={register({ required: true })} />
              </div>
              <div className="app-form-row">
                <input type="text" name="lastName" className="login-input" placeholder="Last Name" ref={register({ required: true })} />
              </div>
              <div className="app-form-row">
                <input type="text" name="emailAddress" className="login-input" placeholder="Email address" ref={register({ required: true })} />
              </div>
              <div className="app-form-row">
                <input type="text" name="phoneNumber" className="login-input" placeholder="Phone number" ref={register({ required: true })} />
              </div>
              
              <div className="app-form-row">
                <button type="submit" className="login-button text-white bg-orange bold uppercase">
                  Register
                </button>
              </div>
              <div className="app-form-row">
                <span className="subtitle">
                  Dont need an account yet?{" "}
                  <Link to="/">
                    <span className="bold text-vla">Click here</span>
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6 col-sm-6 col-xs-12 full-page-height bg-login"></div>
      </div>
    </div>
    )
};
export const ForgotPassword = () => {
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
                <span className="login-notice text-vla block">Recover my account </span>
              </div>
              <div className="app-form-row">
                <span className="login-notice text-vla">Enter your email address to recover your password </span>
              </div>

              <div className="app-form-row">
                <input type="text" name="emailAddress" className="login-input" placeholder="Email address" ref={register({ required: true })} />
              </div>
            
              <div className="app-form-row">
                <button type="submit" className="login-button text-white bg-orange bold uppercase">
                  Login
                </button>
              </div>
              <div className="app-form-row">
                <span className="subtitle">
                  Remebered it?{" "}
                  <Link to="/">
                    <span className="bold text-vla">Sign back in</span>
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
