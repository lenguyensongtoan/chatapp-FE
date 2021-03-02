import React, { useEffect } from "react";
import { createContainer } from "unstated-next";
import AuthComponent from "../components/auth";
import { withFormStore } from "hocs";
import useApiCaller from "../hooks/useApiCaller";
import api from "services/api";
import useForm from "../hooks/useForm";
import store from "store";
export const FormStoreContainer = createContainer(useForm);

function Auth() {
  const { handleCallingAPI: handleSignin } = useApiCaller({
    apiCaller: api.auth.signin,
  });
  const { dispatch } = store.useContainer();
  const form = FormStoreContainer.useContainer();

  //Change status (login/ regis)
  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }, []);
  const signin = async (data) => {
    const dataSubmit = {
      email: data?.email,
      password: data?.password,
    };
    try {
      let res = handleSignin(dataSubmit);
      if (res) {
        console.log(res),
          dispatch({
            type: "AUTH",
            payload: {
              data: res,
            },
          });
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    form.registerHandleSubmit(signin);
  }, []);
  return <AuthComponent />;
}

export default withFormStore(Auth)(FormStoreContainer.Provider);
