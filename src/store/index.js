import { createContainer } from "unstated-next";
import { cond, isObject } from "lodash";
import useAuthenticationStore from "./useAuthenticationStore";

const storeApp = () => {
  let [authenticationStore, setAuthenticationStore] = useAuthenticationStore();

  const reducer = {
    authenticationStore,
  };

  const dispatch = (action) => {
    if (!isObject(action)) {
      return;
    }

    switch (action?.type) {
      case "AUTH":
        setAuthenticationStore(action?.payload);
        break;
      default:
        return;
    }
  };

  return { ...reducer, dispatch };
};

let store = createContainer(storeApp);

export default store;
