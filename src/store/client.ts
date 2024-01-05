import { defineStore } from 'pinia';

type TGroupState = {
  windowData: {
    width: number,
    height: number,
  } | null,
  windowSizeWatcherEnabled: boolean,
};

const useClientStore = defineStore('client', {
  state: (): TGroupState => ({
    windowData: null,
    windowSizeWatcherEnabled: false,
  }),
  actions: {
    updateWindowData() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      this.windowData = {
        width,
        height,
      };

      return this.windowData;
    },
    enableWindowSizeWatcher() {
      if (this.windowSizeWatcherEnabled) return;

      this.updateWindowData();

      // eslint-disable-next-line @typescript-eslint/unbound-method
      window.addEventListener('resize', this.updateWindowData, false);
      this.windowSizeWatcherEnabled = true;
    },
    disableWindowSizeWatcher() {
      if (!this.windowSizeWatcherEnabled) return;

      // eslint-disable-next-line @typescript-eslint/unbound-method
      window.removeEventListener('resize', this.updateWindowData, false);
      this.windowSizeWatcherEnabled = false;
    },
  },
});

export default useClientStore;
