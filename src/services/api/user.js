import APIService from "./lib";

export const getAll = async (data) => {
  return APIService.post("/users", data);
};
export const getOne = async (data) => {
  return APIService.post(`/users/${data}`);
};
export const deleteUser = async (data) => {
  return APIService.delete(`/users/${data}`,);
};
