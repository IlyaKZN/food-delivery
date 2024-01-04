<template>
  <button class="button-component">
    <slot>
      <span v-if="text">
        {{ text }}
      </span>

      <span
      v-if="icon"
      class="material-icons button-component__icon">
        {{ icon }}
      </span>
    </slot>
  </button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'ButtonComponent',
    props: {
      text: {
        type: String,
        default: null,
      },
      icon: {
        type: String,
        default: null,
      },
    },
  });
</script>

<style lang="scss">
  @use '@/styles/variables' as *;

  .button-component {
    position: relative;

    width: 100%;
    height: 100%;
    padding: 0;
    overflow: hidden;

    background-color: $color-app-primary;
    border: 0;
    border-radius: 14px;

    font-size: 24px;

    cursor: pointer;

    &::after {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      background-color: rgb(0 0 0 / 0.05);
      opacity: 0;

      content: '';

      transition:
        opacity 0.1s linear,
        background-color 0.05s linear;
    }

    &:hover::after {
      opacity: 1;
    }

    &:active::after {
      background-color: rgb(0 0 0 / 0.1);
    }
  }

  .button-component__icon {
    font-size: 48px !important;
  }
</style>