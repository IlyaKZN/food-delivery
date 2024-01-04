<template>
  <div class="main-screen">
    <SpecialOffersCarousel/>
  </div>
</template>

<script lang="ts">
  import '@/styles/index.scss';

  import { defineComponent } from 'vue';
  import SpecialOffersCarousel from './SpecialOffersCarousel';

  export default defineComponent({
    name: 'MainScreen',
    components: {
      SpecialOffersCarousel,
    },
  });
</script>

<style lang="scss">
  .main-screen {
    flex-grow: 1;

    padding: 52px 44px;
  }
</style>