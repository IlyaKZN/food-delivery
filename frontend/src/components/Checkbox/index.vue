<template>
  <div
  @click="$emit('update:modelValue', !modelValue)"
  :class="$style.container">
    <input
    :class="$style.input"
    type="checkbox"
    :value="modelValue">

    <span :class="`${$style.checkmark} ${modelValue ? $style['checkmark--checked'] : ''}`">
      <IconComponent
      v-if="modelValue"
      :class="$style.icon"
      icon="check"/>
    </span>

    <span>
      {{ text }}
    </span>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import IconComponent from '../Icon';

  export default defineComponent({
    name: 'CheckboxComponent',
    components: {
      IconComponent,
    },
    props: {
      modelValue: {
        type: Boolean,
        default: true,
      },
      text: {
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
    position: relative;

    display: flex;
    align-items: center;

    height: 24px;
    padding-left: 32px;

    font-size: 16px;

    cursor: pointer;
    user-select: none;
  }

  .input {
    position: absolute;

    width: 0;
    height: 0;

    opacity: 0;

    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;

    width: 24px;
    height: 24px;

    background-color: #fff;
    border: 2px solid $color-app-secondary;
    border-radius: 6px;
  }

  .checkmark--checked {
    background-color: $color-app-primary;
  }

  .icon {
    width: 20px;
    height: 20px;

    font-size: 20px !important;
    color: $color-app-secondary;
  }
</style>