import APIService from "./lib";

export const signin = async (data) => {
  return APIService.post("/auth/signin", data);
};
export const signup = async (data) => {
  return APIService.post("/auth/signup", data);
};
export const forgot = async (data) => {
  return APIService.post("/auth/forgot", data);
};

export const reset = async (data) => {
  return APIService.post("/auth/reset", data);
};
