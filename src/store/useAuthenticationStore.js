import { useState, useEffect, useCallback } from 'react';
import { isObject } from 'lodash';
import appConfig from '@configs/app.json';
import APIService from 'services/api/lib';

const initialState = {
  isAuthenticated: false,
  accessToken: '',
};

const loadAuthDataFromStorage = (key) => {
  let dataLoaded = window.localStorage.getItem(key);
  if (dataLoaded) {
    return JSON.parse(dataLoaded);
  }

  dataLoaded = window.sessionStorage.getItem(key);

  return JSON.parse(dataLoaded);
};

const setAuthDataToStorage = (remember, key, data) => {
  if (remember) {
    window.localStorage.setItem(key, JSON.stringify(data));
    window.sessionStorage.removeItem(key);

    return;
  }

  window.sessionStorage.setItem(key, JSON.stringify(data));
  window.localStorage.removeItem(key);
};

const useStore = () => {
  let [data, updateData] = useState(initialState);
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      return;
    }

    setAuthDataToStorage(data.remember, appConfig.authKey, data);
  }, [data]);

  useEffect(() => {
    APIService.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response && error.response.status && error.response.status === 401) {
          setData(initialState);
        }
      }
    );
  }, [data?.accessToken]);

  useEffect(() => {
    const dataLoaded = loadAuthDataFromStorage(appConfig.authKey) || initialState;

    dataLoaded.loaded = true;
    setData(dataLoaded);
    setLoaded(true);
  }, []);

  const setData = (newData) => {
    if (!isObject(newData)) {
      return;
    }

    if (newData.accessToken) {
      window.accessToken = newData.accessToken;
    }

    if (newData.connectionId) {
      window.connectionId = newData.connectionId;
    }

    //connectionId

    updateData((prData) => ({
      ...prData,
      ...newData,
    }));
  };

  return [{ ...data, loaded }, setData];
};

export default useStore;
