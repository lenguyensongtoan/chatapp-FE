import React, { useEffect } from "react";
import { withFormStore } from "hocs";
import { createContainer } from "unstated-next";
import { useForm } from "hooks";
import api from "services/api";
import useApiCaller from "../../hooks/useApiCaller";
import store from "store";

export const FormStoreContainer = createContainer(useForm);

function ForgotPassword({setIsLoading}) {
  const { dispatch } = store.useContainer();
  const form = FormStoreContainer.useContainer();
  const { handleCallingAPI: handleForgot } = useApiCaller({
    apiCaller: api.auth.forgot,
  });
  const sendMail = async (data) => {
    const dataSubmit = {
      email: data?.email
    };
    try {
      setIsLoading(true);
      let res = await handleForgot(dataSubmit);
      if (res) {
        setIsLoading(false);
        console.log(res)
      }
    } catch (err) {
      setIsLoading(false);

      console.error(err);
    }
  };
  useEffect(() => {
    form.registerHandleSubmit(sendMail);
  }, []);
  return (
    <form action="#" className="forgot-form" onSubmit={form.submit}>
      <h2 className="title">Forgot Password</h2>
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

      <input type="submit" className="btn solid" value="Send mail" />
    </form>
  );
}

export default withFormStore(ForgotPassword)(FormStoreContainer.Provider);
