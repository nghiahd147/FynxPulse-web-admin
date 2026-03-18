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
    getListUsers: (params: Record<string, unknown>) => ({
      endPoint: "/api/user/",
      method: "GET",
      headers: HEADERS.DEFAULT_HEADER,
      params,
    }),
    getDetailUser: (id: string) => ({
      endPoint: `/api/user/${id}`,
      method: "GET",
      headers: HEADERS.DEFAULT_HEADER,
    }),
    deleteUser: (id: string) => ({
      endPoint: `/api/user/${id}`,
      method: "DELETE",
      headers: HEADERS.DEFAULT_HEADER,
    }),
  },
};
