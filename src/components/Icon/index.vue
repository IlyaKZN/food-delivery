<template>
  <span
  class="icon-component material-icons"
  :class="{
    'icon-component--clickable': clickable
  }">
    {{ icon }}
  </span>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'IconComponent',
    props: {
      icon: {
        type: String,
        required: true,
      },
      clickable: {
        type: Boolean,
        default: false,
      },
    },
  });
</script>

<style lang="scss">
  .icon-component {
    position: relative;

    width: 24px;
    height: 24px;

    border-radius: 50%;

    font-size: 24px;

    user-select: none;

    &::after {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      background-color: rgb(0 0 0 / 0.05);
      border-radius: 50%;
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

  .icon-component--clickable {
    cursor: pointer;
  }
</style>