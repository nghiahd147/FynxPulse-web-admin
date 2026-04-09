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
  loginUser: (payload: { email: string; password: string }) => void;
  logoutUser: (refresh_token: string) => void;
  bandUser: (id: string) => void;
  unBandUser: (id: string) => void;
  switchUserRole: (id: string, role: number) => void;
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
  loginUser: async (payload) => {
    set({ isLoading: false });
    try {
      const res = await apiCall(API_URLS.USERS.login(payload));
      localStorage.setItem("access_token", res.result.accessToken);
      localStorage.setItem("refresh_token", res.result.refreshToken);
    } finally {
      set({ isLoading: true });
    }
  },
  logoutUser: async (refresh_token: string) => {
    set({ isLoading: true });
    try {
      await apiCall(API_URLS.USERS.logout(refresh_token));
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    } finally {
      set({ isLoading: false });
    }
  },
  bandUser: async (id: string) => {
    set({ isLoading: true });
    try {
      await apiCall(API_URLS.USERS.bandUser(id));
    } finally {
      set({ isLoading: false });
    }
  },
  unBandUser: async (id: string) => {
    set({ isLoading: true });
    try {
      await apiCall(API_URLS.USERS.unBandUser(id));
    } finally {
      set({ isLoading: false });
    }
  },
  switchUserRole: async (id: string, role: number) => {
    set({ isLoading: true });
    try {
      await apiCall(API_URLS.USERS.switchUserRole(id, role));
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useUsersStore;
