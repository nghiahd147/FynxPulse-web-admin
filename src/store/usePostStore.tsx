import { create } from "zustand";
import type { PostType } from "../types";
import { apiCall } from "../utils/axios";
import { API_URLS } from "../config/api";
import type { Params } from "react-router-dom";

type PostStore = {
  data: PostType[];
  isLoading: boolean;
  getListPost: (params: Params) => void;
};

const usePostStore = create<PostStore>()((set) => ({
  data: [],
  isLoading: false,
  getListPost: async (params) => {
    set({ isLoading: true });
    try {
      const posts = await apiCall(API_URLS.POSTS.getListPosts(params));
      set({ data: posts?.result, isLoading: false });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default usePostStore;
