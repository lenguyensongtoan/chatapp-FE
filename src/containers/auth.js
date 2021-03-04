import React, { useEffect } from "react";
import AuthComponent from "../components/auth";

function Auth() {
  //Change status (login/ regis)
  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const forgot_btn = document.querySelector("#forgot-btn");
    const container = document.querySelector(".container");
    const signupForm = document.querySelector(".sign-up-form");
    const forgotForm = document.querySelector(".forgot-form");

    sign_up_btn.addEventListener("click", () => {
      setTimeout(() => {
        container.classList.add("sign-up-mode");
        forgotForm.classList.add("hidden");
        signupForm.classList.remove("hidden");
      }, 1500);
    });
    forgot_btn.addEventListener("click", () => {
      setTimeout(() => {
        container.classList.add("sign-up-mode");
        forgotForm.classList.remove("hidden");
        signupForm.classList.add("hidden");
      }, 1500);
    });
    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }, []);

  return <AuthComponent />;
}

export default Auth;
