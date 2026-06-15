import { defineStore } from 'pinia';
import type { ConfigProps } from '../types/customizer';

export const useCustomizerStore = defineStore('customizer', {
  state: (): ConfigProps => ({
    Sidebar_drawer: null,
    mini_sidebar: false,
  }),

  getters: {},
  actions: {
    SET_SIDEBAR_DRAWER() {
      this.Sidebar_drawer = !this.Sidebar_drawer;
    },
    SET_MINI_SIDEBAR(payload: any) {
      this.mini_sidebar = payload;
    },
  },
});
