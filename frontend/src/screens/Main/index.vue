<template>
  <div class="main-screen">
    <div class="main-screen__content">
      <h2 class="main-screen__section-title">
        Акции
      </h2>

      <SpecialOffersCarousel class="main-screen__special-offers-carousel"/>

      <h2 class="main-screen__section-title">
        Рестораны
      </h2>

      <ControlPanel
      v-if="windowData?.width > 766"
      v-model:filter="activeFilter"
      v-model:sort="sort"
      class="main-screen__control-panel"/>

      <MobileControlPanel
      v-else
      class="main-screen__mobile-control-panel"/>

      <RestorauntList/>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { storeToRefs } from 'pinia';
  import SpecialOffersCarousel from './SpecialOffersCarousel';
  import ControlPanel from './ControlPanel';
  import MobileControlPanel from './MobileControlPanel';
  import RestorauntList from './RestorauntList';
  import useClientStore from '@/store/client';

  export default defineComponent({
    name: 'MainScreen',
    components: {
      SpecialOffersCarousel,
      ControlPanel,
      MobileControlPanel,
      RestorauntList,
    },
    setup() {
      const clientStore = useClientStore();

      const { windowData } = storeToRefs(clientStore);

      const activeFilter = ref('all');
      const sort = ref('');

      return {
        activeFilter,
        sort,
        windowData,
      };
    },
  });
</script>

<style lang="scss">
  .main-screen {
    display: flex;
    flex-grow: 1;
    justify-content: center;

    padding: 100px 80px 52px;

    @media screen and (width <= 1200px) {
      padding-right: 40px;
      padding-left: 40px;
    }
    @media screen and (width <= 1023px) {
      padding-right: 20px;
      padding-left: 20px;
    }
    @media screen and (width <= 575px) {
      padding-top: 80px;
      padding-right: 14px;
      padding-left: 14px;
    }
  }

  .main-screen__content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    width: 100%;
    max-width: 1480px;
  }

  .main-screen__section-title {
    margin-bottom: 20px;

    font-size: 42px;
    font-weight: 700;

    @media screen and (width <= 1400px) {
      margin-bottom: 14px;

      font-size: 36px;
    }
    @media screen and (width <= 1200px) {
      font-size: 32px;
    }
    @media screen and (width <= 1023px) {
      margin-bottom: 10px;
    }
  }

  .main-screen__special-offers-carousel {
    width: 100%;
    aspect-ratio: 36 / 5;
    margin-bottom: 30px;

    @media screen and (width <= 1200px) {
      margin-bottom: 20px;
    }
    @media screen and (width <= 1023px) {
      margin-bottom: 12px;
    }
  }

  .main-screen__control-panel {
    margin-bottom: 42px;
  }

  .main-screen__mobile-control-panel {
    margin-bottom: 12px;
  }
</style>