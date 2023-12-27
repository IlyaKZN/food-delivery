<template>
  <div class="text-field-component">
    <span
    v-if="icon"
    class="text-field-component-icon material-icons">
      search
    </span>

    <input
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    class="text-field-component__input"
    :placeholder="placeholder"
    spellcheck="false"
    :value="modelValue">
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'TextFieldComponent',
    props: {
      modelValue: {
        type: String,
        default: '',
      },
      placeholder: {
        type: String,
        default: null,
      },
      icon: {
        type: String,
        default: null,
      },
    },
    emits: ['update:modelValue'],
  });
</script>

<style lang="scss">
  .text-field-component {
    display: flex;
    align-items: center;

    width: 500px;
    height: 100%;
    overflow: hidden;

    background: #fff;
  }

  .text-field-component-icon {
    margin: 0 10px 0 12px;

    font-size: 36px !important;
    color: #557ee5;
  }

  .text-field-component__input {
    width: 100%;
    height: 20px;
    margin-right: 12px;

    border: 0;

    font-size: 20px;
    line-height: 24px;

    &:focus-visible {
      outline: 0;
    }
  }
</style>