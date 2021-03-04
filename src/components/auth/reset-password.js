import React, { useEffect } from "react";
import { withFormStore } from "hocs";
import { createContainer } from "unstated-next";
import { useForm } from "hooks";
import store from "store";
export const FormStoreContainer = createContainer(useForm);

function ResetPassword() {
  const { dispatch } = store.useContainer();
  const form = FormStoreContainer.useContainer();
  return (
    <form className="sign-in-form" onSubmit={form.submit}>
      <h2 className="title">Reset Password</h2>
      <div className="input-field">
        <i aria-hidden className="fas fa-user"></i>
        <input
          name="old_password"
          ref={form.register({
            required: true,
          })}
          type="password"
          placeholder="Old Password"
        />
      </div>
      {form.errors.old_password?.type === "required" && (
        <small style={{ color: "white" }}>Password is required</small>
      )}
      <div className="input-field">
        <i aria-hidden className="fas fa-user"></i>
        <input
          name="new_password"
          ref={form.register({
            required: true,
          })}
          type="password"
          placeholder="New Password"
        />
      </div>
      {form.errors.new_password?.type === "required" && (
        <small style={{ color: "white" }}>Password is required</small>
      )}
      <input type="submit" className="btn solid" value="Submit" />

      <a href="/" className="social-text">
        Back to the Signin Page
      </a>
    </form>
  );
}

export default withFormStore(ResetPassword)(FormStoreContainer.Provider);
