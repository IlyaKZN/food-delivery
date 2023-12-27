<template>
  <button class="button-component">
    <slot>
      <span>
        {{ text }}
      </span>
    </slot>

    <div class="button-component__ripple-container">
      <div
      class="button-component__ripple"
      ref="item"/>
    </div>
  </button>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { MDCRipple } from '@material/ripple';

  export default defineComponent({
    name: 'ButtonComponent',
    props: {
      text: {
        type: String,
        default: null,
      },
    },
    setup() {
      const rippleEffect = ref<MDCRipple>();
      const item = ref<Element>();

      function updateRipple() {
        if (item.value) {
          rippleEffect.value?.destroy();
          rippleEffect.value = new MDCRipple(item.value);
        }
      }

      onMounted(() => {
        updateRipple();
      });
    },
  });
</script>

<style lang="scss">
  @use '@/styles/variables' as *;
  @use 'sass:color';
  @use '@material/ripple';

  .button-component {
    position: relative;

    height: 100%;
    padding: 0 30px;

    background-color: $color-app-primary;
    border: 0;

    font-size: 24px;

    cursor: pointer;

    transition: background-color 0.1s linear;

    &:hover {
      background-color: color.adjust($color-app-primary, $lightness: -6%);
    }
  }

  .button-component__ripple-container {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    overflow: hidden;

    border-radius: 10px;
  }

  .button-component__ripple {
    @include ripple.surface;
    @include ripple.radius-bounded;
    @include ripple.states;
    width: 100%;
    min-height: 100%;
  }

  .button-component__ripple::before,
  .button-component__ripple::after {
    background-color: #fff;
  }
</style>