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

    <span class="mdc-button__ripple"/>
    <!-- <div
    class="button-component__ripple-container">
      <div
      class="button-component__ripple"
      ref="item"/>
    </div> -->

    <!-- <div class="mdc-ripple-surface button-component__ripple-container">
      <div
      class="button-component__ripple"
      ref="item"/>
    </div> -->
  </button>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue';
  // import { MDCRipple } from '@material/ripple';

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
    setup() {
      // const rippleEffect = ref<MDCRipple>();
      // const item = ref<Element>();

      // function updateRipple() {
      //   if (item.value) {
      //     rippleEffect.value?.destroy();
      //     console.log(item.value);

      //     rippleEffect.value = new MDCRipple(item.value);
      //   }
      // }

      onMounted(() => {
        // updateRipple();
      });

      return {
      };
    },
  });
</script>

<style lang="scss">
  @use '@/styles/variables' as *;
  @use 'sass:color';
  @use '@material/ripple';
  @use '@material/theme/index.scss' as mdc-theme;

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

    // &::after {
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   z-index: 10;

    //   display: block;

    //   width: 100%;
    //   height: 100%;

    //   // background-color: rgba(#000, 0.05);
    //   opacity: 0;

    //   content: '';

    //   transition: all 0.1s linear;
    // }

    // &:hover::after {
    //   opacity: 1;
    // }
  }

  .mdc-button__ripple {
    display: block;
  }

  .mdc-button__ripple::before,
  .mdc-button__ripple::after {
    background-color: red;
  }

  // .button-component__ripple-container {
  //   position: absolute;
  //   top: 0;
  //   left: 0;

  //   width: 100%;
  //   height: 100%;
  //   overflow: hidden;

  //   // border-radius: 14px;
  // }

  // .button-component__ripple {
  //   @include ripple.surface;
  //   @include ripple.radius-bounded;
  //   @include ripple.states;

  //   // @include ripple.states-opacities(
  //   //   (
  //   //     hover: 0,
  //   //     focus: 0.1,
  //   //     press: 0.1,
  //   //   )
  //   // );

  //   &:hover {
  //     background-color: rgba(#000, 0.03);
  //   }

  //   width: 100%;
  //   min-height: 100%;
  // }

  // .button-component__ripple::before,
  // .button-component__ripple::after {
  //   @if mdc-theme.tone($color-app-primary) == 'dark' {
  //     background-color: white !important;
  //   } @else {
  //     background-color: black !important;
  //   }

  //   // background-color: #fff;
  // }

  .button-component__icon {
    font-size: 48px !important;
  }
</style>