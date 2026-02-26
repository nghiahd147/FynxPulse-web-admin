import { create } from "zustand";
import type { UserType } from "../types";
import { apiCall } from "../utils/axios";
import { API_URLS } from "../config/api";

type UserStore = {
  isLoading: boolean;
  data: UserType[];
  total: string | null;
  getListUsers: (params: any) => void;
};

const useUsersStore = create<UserStore>()((set) => ({
  isLoading: false,
  data: [],
  total: null,

  getListUsers: async (params) => {
    set({ isLoading: true });
    try {
      const res = await apiCall(API_URLS.USERS.getListUsers(params));
      set({ data: res.data, total: res.pagination.total, isLoading: false });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useUsersStore;
