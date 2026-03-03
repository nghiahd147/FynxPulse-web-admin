import { create } from "zustand";
import type { UserType } from "../types";
import { apiCall } from "../utils/axios";
import { API_URLS } from "../config/api";

type UserStore = {
  isLoading: boolean;
  data: UserType[];
  detailUser: UserType | null;
  total: string | null;
  getListUsers: (params: any) => void;
  getDetailUser: (id: string) => void;
  deleteUser: (id: string) => void;
};

const useUsersStore = create<UserStore>()((set) => ({
  isLoading: false,
  data: [],
  detailUser: null,
  total: null,

  getListUsers: async (params) => {
    set({ isLoading: true });
    try {
      const res = await apiCall(API_URLS.USERS.getListUsers(params));
      set({ data: res.data, total: res.pagination.total });
    } finally {
      set({ isLoading: false });
    }
  },
  getDetailUser: async (id) => {
    set({ isLoading: true });
    try {
      const res = await apiCall(API_URLS.USERS.getDetailUser(id));
      set({ detailUser: res.data });
    } finally {
      set({ isLoading: false });
    }
  },
  deleteUser: async (id) => {
    set({ isLoading: true });
    try {
      await apiCall(API_URLS.USERS.deleteUser(id));
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useUsersStore;
