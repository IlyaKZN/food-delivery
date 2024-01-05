<template>
  <button
  class="button-component"
  :class="[
    `button-component--${type}`,
    {
      'button-component--reverse': iconPosition === 'left'
    }
  ]">
    <slot>
      <template v-if="text">
        <span>
          {{ text }}
        </span>

        <span
        v-if="icon"
        class="material-icons button-component__icon--small">
          {{ icon }}
        </span>
      </template>

      <span
      v-if="icon && !text"
      class="material-icons button-component__icon--big">
        {{ icon }}
      </span>
    </slot>
  </button>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';

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
      type: {
        type: String as PropType<'primary' | 'base'>,
        default: 'primary',
      },
      iconPosition: {
        type: String as PropType<'right' | 'left'>,
        default: 'right',
      },
    },
  });
</script>

<style lang="scss">
  @use '@/styles/variables' as *;

  .button-component {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

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

  .button-component--reverse {
    flex-direction: row-reverse;
  }

  .button-component--base {
    background-color: transparent;
  }

  .button-component__icon--small {
    font-size: 24px !important;
  }

  .button-component__icon--big {
    font-size: 48px !important;
  }
</style>