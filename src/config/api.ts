import type { Params } from "react-router-dom";

export const HEADERS = {
  DEFAULT_HEADER: {
    "Content-Type": "application/json",
  },
  header: () => ({
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    Authorization: localStorage.getItem("access_token"),
  }),
  jsonHeader: () => ({
    "Content-Type": "application/json; charset=UTF-8",
    Authorization: "Bearer " + localStorage.getItem("access_token"),
  }),
  file_header: () => ({
    "Content-Type": "multipart/form-data",
    Authorization: localStorage.getItem("access_token"),
  }),
};

export const API_URLS = {
  USERS: {
    login: (payload: { email: string; password: string }) => ({
      endPoint: "/api/user/login",
      method: "POST",
      headers: HEADERS.DEFAULT_HEADER,
      payload,
    }),
    logout: (refresh_token: string) => ({
      endPoint: "/api/user/logout",
      method: "POST",
      headers: HEADERS.jsonHeader(),
      payload: { refresh_token },
    }),
    getListUsers: (params: Params) => ({
      endPoint: "/api/user/",
      method: "GET",
      headers: HEADERS.jsonHeader(),
      params,
    }),
    getDetailUser: (id: string) => ({
      endPoint: `/api/user/${id}`,
      method: "GET",
      headers: HEADERS.jsonHeader(),
    }),
    bandUser: (id: string) => ({
      endPoint: `/api/user/${id}/ban`,
      method: "PATCH",
      headers: HEADERS.jsonHeader(),
    }),
    unBandUser: (id: string) => ({
      endPoint: `/api/user/${id}/unban`,
      method: "PATCH",
      headers: HEADERS.jsonHeader(),
    }),
    switchUserRole: (id: string, role: number) => ({
      endPoint: `/api/user/${id}/role`,
      method: "PATCH",
      headers: HEADERS.jsonHeader(),
      payload: { role },
    }),
    deleteUser: (id: string) => ({
      endPoint: `/api/user/${id}`,
      method: "DELETE",
      headers: HEADERS.jsonHeader(),
    }),
  },
  POSTS: {
    getListPosts: (params: Params) => ({
      endPoint: "/api/post/",
      method: "GET",
      headers: HEADERS.jsonHeader(),
      params,
    }),
  },
};
