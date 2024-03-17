<template>
  <div class="mobile-control-panel">
    <ButtonComponent
    class="mobile-control-panel__button"
    icon="sort"/>

    <ButtonComponent
    class="mobile-control-panel__button"
    icon="tune"/>

    <ButtonComponent
    class="mobile-control-panel__button"
    icon="search"/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import ButtonComponent from '@/components/Button';

  export default defineComponent({
    name: 'MobileControlPanel',
    components: {
      ButtonComponent,
    },
    setup() {
    },
  });
</script>

<style lang="scss">
  .mobile-control-panel {
    display: flex;
    gap: 8px;
  }

  .mobile-control-panel__button {
    aspect-ratio: 5;

    .button-component__icon {
      width: 24px;

      font-size: 24px !important;
    }
  }
</style>