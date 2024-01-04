<template>
  <div class="main-screen">
    <h2 class="main-screen__section-title">
      Акции
    </h2>

    <SpecialOffersCarousel class="main-screen__special-offers-carousel"/>

    <h2 class="main-screen__section-title">
      Рестораны
    </h2>

    <ControlPanel/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import SpecialOffersCarousel from './SpecialOffersCarousel';
  import ControlPanel from './ControlPanel';

  export default defineComponent({
    name: 'MainScreen',
    components: {
      SpecialOffersCarousel,
      ControlPanel,
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
</style>