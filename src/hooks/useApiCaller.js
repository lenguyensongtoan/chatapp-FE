import useMinimumDelay from "hooks/useMinimumDelay";
import { removeUndefinedProps } from "utilities/helper";
import store from "store";

export default ({
  apiCaller,
  messageFail,
  messageSuccess,
  minimumDelay = 500,
}) => {
  const [isLoading, setIsLoadingWithDelay, setIsLoading] = useMinimumDelay(
    false,
    minimumDelay
  );
  const { dispatch } = store.useContainer();

  const handleCallingAPI = async (...rest) => {
    let data = rest;
    if (rest?.length === 1) {
      data = removeUndefinedProps(...rest);

      data = [data];
    }

    setIsLoading(true);

    try {
      const responseData = await apiCaller(...data);
      if (messageSuccess) {
        //TODO
      }

      return responseData;
    } catch (ex) {
      if (ex?.response?.status === 401) {
        dispatch({
          type: "AUTH",
          payload: {
            isAuthenticated: false,
            accessToken: "",
            useData: "",
            remember: false,
            connectionId: "",
          },
        });
      }

      if (messageFail) {
        //TODO
      }

      return Promise.reject(ex);
    } finally {
      setIsLoadingWithDelay(false);
    }
  };

  return {isLoading, handleCallingAPI, setIsLoadingWithDelay, setIsLoading};
};
