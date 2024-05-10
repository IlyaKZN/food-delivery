<template>
  <button
  class="button-component"
  :class="[
    `button-component--${type}`,
    {
      'button-component--reverse': iconPosition === 'left'
    }
  ]"
  :disabled="disabled"
  type="button">
    <slot>
      <template v-if="text">
        <span>
          {{ text }}
        </span>

        <span
        v-if="icon"
        class="button-component__icon material-icons">
          {{ icon }}
        </span>
      </template>

      <span
      v-if="icon && !text"
      class="button-component__icon material-icons">
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
        type: String as PropType<'primary' | 'secondary' | 'base' | 'accent'>,
        default: 'primary',
      },
      iconPosition: {
        type: String as PropType<'right' | 'left'>,
        default: 'right',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      function clickHandler(event: Event) {
        if (props.disabled) {
          event.stopPropagation();
        }
      }

      return {
        clickHandler,
      };
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
    min-height: 40px;
    padding: 0 14px;
    overflow: hidden;

    background-color: $color-app-primary;
    border: 0;
    border-radius: 14px;

    font-size: 20px;

    cursor: pointer;
    user-select: none;

    &:disabled {
      color: currentcolor;

      cursor: auto;
    }

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

  .button-component--secondary {
    background-color: #eaeaea;
  }

  .button-component--accent {
    background-color: $color-app-accent;
  }

  .button-component__icon {
    display: block !important;

    width: 24px;

    font-size: 24px !important;
  }

  // .button-component__icon--big {
  //   display: block !important;

  //   width: 48px;

  //   font-size: 48px !important;
  // }
</style>