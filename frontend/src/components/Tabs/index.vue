<template>
  <div :class="$style.container">
    <ButtonComponent
    v-for="(tab, index) in tabs"
    @click="$emit('update:modelValue', tab.value)"
    :class="[
      $style.button,
      index === tabs.length - 1 && $style['button-last'],
      tab.value === modelValue && $style['button--active'],
    ]"
    :text="tab.text"
    type="primary"
    :key="tab.value"/>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import ButtonComponent from '../Button';
  import { TTabs } from './types';

  export default defineComponent({
    name: 'TabsComponent',
    components: {
      ButtonComponent,
    },
    props: {
      tabs: {
        type: Object as PropType<TTabs>,
        required: true,
      },
      modelValue: {
        type: String,
        default: '',
      },
    },
    emits: ['update:modelValue'],
  });
</script>

<style module lang="scss">
  @use '@/styles/variables' as *;

  .container {
    display: flex;

    overflow: hidden;

    border: 2px solid $color-app-secondary;
    border-radius: 14px;
  }

  .button {
    min-width: 124px;

    background-color: white;
    border-right: 2px solid $color-app-secondary;
    border-radius: 0;
  }

  .button--active {
    background-color: $color-app-primary;
  }

  .button-last {
    border-right: 0;
  }
</style>