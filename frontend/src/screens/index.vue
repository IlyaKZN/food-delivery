<template>
  <div class="app-screen">
    <TheHeaderComponent/>

    <router-view/>
  </div>
</template>

<script lang="ts">
  import '@/styles/index.scss';

  import { defineComponent } from 'vue';
  import TheHeaderComponent from '../components/TheHeader';
  import useClientStore from '@/store/client';

  export default defineComponent({
    name: 'AppScreen',
    components: {
      TheHeaderComponent,
    },
    setup() {
      const clientStore = useClientStore();

      clientStore.enableWindowSizeWatcher();
    },
  });
</script>

<style lang="scss">
  .app-screen {
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    min-height: calc(100vh - 80px);
  }
</style>
