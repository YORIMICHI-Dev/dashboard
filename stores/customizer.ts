import { defineStore } from 'pinia';
import type { ConfigProps } from '@/types/customizer';

export const useCustomizerStore = defineStore({
  id: 'customizer',
  state: (): ConfigProps => ({
    Sidebar_drawer: null,
    Customizer_drawer: false,
    mini_sidebar: false,
    actTheme: 'GREEN_THEME',
  }),

  getters: {},
  actions: {
    SET_SIDEBAR_DRAWER() {
      this.Sidebar_drawer = !this.Sidebar_drawer;
    },
    SET_MINI_SIDEBAR(payload: any) {
      this.mini_sidebar = payload;
    },
    SET_CUSTOMIZER_DRAWER(payload: any) {
      this.Customizer_drawer = payload;
    },
    SET_THEME(payload: any) {
      this.actTheme = payload;
    },
  },
});
