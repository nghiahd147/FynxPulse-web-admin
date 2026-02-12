import { create } from "zustand";
import type { Pagination, UserType } from "../types";
import { apiCall } from "../utils/axios";
import { API_URLS } from "../config/api";

type UserStore = {
  isLoading: boolean;
  data: UserType[];
  pagination: Pagination;
  getListUsers: (params: string) => void;
};

const useUsersStore = create<UserStore>()((set) => ({
  isLoading: false,
  pagination: {
    page: 1,
    page_size: 10,
  },
  data: [],

  getListUsers: async (params) => {
    set({ isLoading: true });
    try {
      const res = await apiCall(API_URLS.USERS.getListUsers(params));
      set({ data: res.data, pagination: res.pagination, isLoading: false });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useUsersStore;
