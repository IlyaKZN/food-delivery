import { defineStore } from 'pinia';

type TProfileState = {
  isAuthorized: boolean,
};

const useProfileStore = defineStore('profile', {
  state: (): TProfileState => ({
    isAuthorized: false,
  }),
  actions: {
  },
});

export default useProfileStore;
