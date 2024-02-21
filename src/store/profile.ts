import { defineStore } from 'pinia';

const useProfileStore = defineStore('profile', {
  state: () => ({
    token: localStorage.getItem('token') || '',
  }),
  actions: {
    setToken(token: string) {
      this.token = token;
      localStorage.setItem('token', token);
    }
  },
});

export default useProfileStore;
