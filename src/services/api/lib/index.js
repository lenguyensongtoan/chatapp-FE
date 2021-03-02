import axios from 'axios';
import appConfig from '@configs/app.json';

const service = axios.create({
  baseURL: appConfig.apiEndpoint,
  timeout: appConfig.apiTimeOut,
});

service.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = 'application/json';
  config.headers['authorization'] = window.accessToken;
  config.headers['X-Connection-Id-Header'] = window.connectionId || undefined;

  return config;
});
export default service;
