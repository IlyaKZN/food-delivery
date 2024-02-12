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
      v-model:filter="activeFilter"
      v-model:sort="sort"
      class="main-screen__control-panel"/>

      <RestorauntList/>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import SpecialOffersCarousel from './SpecialOffersCarousel';
  import ControlPanel from './ControlPanel';
  import RestorauntList from './RestorauntList';

  export default defineComponent({
    name: 'MainScreen',
    components: {
      SpecialOffersCarousel,
      ControlPanel,
      RestorauntList,
    },
    setup() {
      const activeFilter = ref('all');
      const sort = ref('');

      return {
        activeFilter,
        sort,
      };
    },
  });
</script>

<style lang="scss">
  .main-screen {
    display: flex;
    flex-grow: 1;
    justify-content: center;

    padding: 132px 80px 52px;

    @media screen and (width <= 1200px) {
      padding-right: 40px;
      padding-left: 40px;
    }
    @media screen and (width <= 1023px) {
      padding-right: 20px;
      padding-left: 20px;
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

    font-size: 48px;
    font-weight: 700;

    @media screen and (width <= 1200px) {
      margin-bottom: 14px;

      font-size: 36px;
    }
    @media screen and (width <= 1023px) {
      margin-bottom: 10px;

      font-size: 28px;
    }
  }

  .main-screen__special-offers-carousel {
    width: 100%;
    aspect-ratio: 36 / 5;
    margin-bottom: 54px;

    @media screen and (width <= 1200px) {
      margin-bottom: 36px;
    }
    @media screen and (width <= 1023px) {
      margin-bottom: 20px;
    }
  }

  .main-screen__control-panel {
    margin-bottom: 42px;
  }
</style>