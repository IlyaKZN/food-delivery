<template>
  <div class="main-screen">
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
    flex-grow: 1;

    padding: 52px 44px;
  }

  .main-screen__section-title {
    margin-bottom: 20px;

    font-size: 48px;
    font-weight: 700;
  }

  .main-screen__special-offers-carousel {
    margin-bottom: 54px;
  }

  .main-screen__control-panel {
    margin-bottom: 42px;
  }
</style>