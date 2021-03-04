import React, { useEffect } from "react";
import { withFormStore } from "hocs";
import useApiCaller from "../../hooks/useApiCaller";
import { createContainer } from "unstated-next";
import { useForm } from "hooks";
import { useRouter } from "next/router";
import api from "services/api";
import store from "store";

export const FormStoreContainer = createContainer(useForm);

function Signin({ setIsLoading }) {
  const Router = useRouter();
  const { dispatch } = store.useContainer();
  const form = FormStoreContainer.useContainer();
  const { handleCallingAPI: handleSignin } = useApiCaller({
    apiCaller: api.auth.signin,
  });
  const signin = async (data) => {
    const dataSubmit = {
      email: data?.email,
      password: data?.password,
    };
    try {
      setIsLoading(true);
      let res = await handleSignin(dataSubmit);
      if (res) {
        setIsLoading(false);
        dispatch({
          type: "AUTH",
          payload: {
            accessToken: res.data.token,
            isAuthenticated: true,
          },
        });
        Router.push("/home");
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    form.registerHandleSubmit(signin);
  }, []);
  return (
    <form action="#" className="sign-in-form" onSubmit={form.submit}>
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <i aria-hidden className="fas fa-user"></i>
        <input
          name="email"
          ref={form.register({
            required: true,
          })}
          type="email"
          placeholder="email"
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
            minLength: 6,
            required: true,
          })}
          type="password"
          placeholder="Password"
        />
      </div>
      {form.errors.password?.type === "required" && (
        <small style={{ color: "white" }}>Password is required</small>
      )}
      {form.errors.password?.type === "minLength" && (
        <small style={{ color: "white" }}>More than 6 characters</small>
      )}
      <input type="submit" className="btn solid" value="Sign in" />
      <p className="social-text">Or Sign in with social platforms</p>
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
      <a id="forgot-btn" className="text-forgot">
        Forgot your password?
      </a>
    </form>
  );
}

export default withFormStore(Signin)(FormStoreContainer.Provider);
