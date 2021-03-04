import React, { useEffect } from "react";
import { withFormStore } from "hocs";
import { createContainer } from "unstated-next";
import useApiCaller from "../../hooks/useApiCaller";
import api from "services/api";
import { useForm } from "hooks";

export const FormStoreContainer = createContainer(useForm);

function Signup({ setIsLoading }) {
  let container = null;
  useEffect(() => {
    container = document.querySelector(".container");
  });
  const form = FormStoreContainer.useContainer();
  const { handleCallingAPI: handleSignup } = useApiCaller({
    apiCaller: api.auth.signup,
  });
  const signup = async (data) => {
    const dataSubmit = {
      email: data?.email,
      username: data?.username,
      password: data?.password,
    };
    try {
      setIsLoading(true);
      let res = await handleSignup(dataSubmit);
      if (res) {
        setIsLoading(false);
        container.classList.remove("sign-up-mode");
        form.reset();
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    form.registerHandleSubmit(signup);
  }, []);
  return (
    <form action="#" className="sign-up-form" onSubmit={form.submit}>
      <h2 className="title">Sign up</h2>
      <div className="input-field">
        <i aria-hidden className="fas fa-user"></i>
        <input
          name="username"
          ref={form.register({
            minLength: 4,
            maxLength: 30,
            required: true,
          })}
          type="text"
          placeholder="Username"
        />
      </div>
      {form.errors.username?.type === "required" && (
        <small style={{ color: "white" }}>Username is required</small>
      )}
      {form.errors.username?.type === "maxLength" && (
        <small style={{ color: "white" }}>Less than 30 characters</small>
      )}
      {form.errors.username?.type === "minLength" && (
        <small style={{ color: "white" }}>More than 4 characters</small>
      )}
      <div className="input-field">
        <i aria-hidden className="fas fa-envelope"></i>
        <input
          name="email"
          ref={form.register({
            required: true,
          })}
          type="email"
          placeholder="Email"
        />
      </div>
      {form.errors.email?.type === "required" && (
        <small style={{ color: "white" }}>Email is required</small>
      )}

      <div className="input-field">
        <i aria-hidden className="fas fa-lock"></i>
        <input
          name="password"
          ref={form.register({
            required: true,
            minLength: 6,
          })}
          type="password"
          placeholder="Password"
        />
      </div>

      {form.errors.password?.type === "minLength" && (
        <small style={{ color: "white" }}>More than 6 characters</small>
      )}
      {form.errors.password?.type === "required" && (
        <small style={{ color: "white" }}>Password is required</small>
      )}
      <input type="submit" className="btn" value="Sign up" />
      <p className="social-text">Or Sign up with social platforms</p>
      <div className="social-media">
        <a href="#" className="social-icon">
          <i aria-hidden className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social-icon">
          <i aria-hidden className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-icon">
          <i aria-hidden className="fab fa-google"></i>
        </a>
        <a href="#" className="social-icon">
          <i aria-hidden className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </form>
  );
}

export default withFormStore(Signup)(FormStoreContainer.Provider);
