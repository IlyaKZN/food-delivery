<template>
  <div class="text-field-component">
    <span
    v-if="icon"
    class="text-field-component-icon material-icons">
      {{ icon }}
    </span>

    <div
    v-if="multiline"
    class="text-field-component__textarea-container">
      <textarea
      class="text-field-component__textarea"/>
    </div>

    <input
    v-else
    @blur="blurInputHandler"
    @focus="focusInputHandler"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    class="text-field-component__input"
    :readonly="readonly"
    :spellcheck="false"
    :type="type === 'password' && !isShowPassword ? 'password' : 'text'"
    :value="modelValue">

    <span
    v-if="type === 'password'"
    @click="changeVisibilityPassword"
    class="material-icons text-field-component__password-icon"
    :title="isShowPassword ? 'Скрыть пароль' : 'Показать пароль'">
      {{ isShowPassword ? 'visibility_off' : 'visibility' }}
    </span>

    <div
    v-if="label"
    class="text-field-component__label"
    :class="{
      'text-field-component__label--top': isLabelOnTop,
      'text-field-component__label--right': icon,
    }">
      <span>{{ label }}</span>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, computed, PropType, nextTick } from 'vue';

  export default defineComponent({
    name: 'TextFieldComponent',
    props: {
      modelValue: {
        type: String,
        default: '',
      },
      label: {
        type: String,
        default: null,
      },
      icon: {
        type: String,
        default: null,
      },
      type: {
        type: String as PropType<'default' | 'password' | 'phoneNumber'>,
        default: 'default',
      },
      multiline: {
        type: Boolean,
        default: false,
      },
      readonly: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const focusedOnInput = ref(false);
      const isShowPassword = ref(false);

      const isLabelOnTop = computed(() => {
        if (props.multiline) return true;

        return props.modelValue || focusedOnInput.value;
      });

      function focusInputHandler() {
        focusedOnInput.value = true;

        if (!props.modelValue && props.type === 'phoneNumber') {
          emit('update:modelValue', '+79');
        }
      }

      async function blurInputHandler() {
        await nextTick();
        await nextTick();
        await nextTick();

        focusedOnInput.value = false;
      }

      function changeVisibilityPassword() {
        isShowPassword.value = !isShowPassword.value;
      }

      return {
        isLabelOnTop,
        isShowPassword,

        changeVisibilityPassword,
        focusInputHandler,
        blurInputHandler,
      };
    },
  });
</script>

<style lang="scss">
  .text-field-component {
    position: relative;

    display: flex;
    align-items: center;

    width: 300px;
    min-height: 40px;
    overflow: visible;

    background: #fff;
    border-radius: 14px;
    outline: 2px solid #557ee5;
    outline-offset: -2px;
  }

  .text-field-component-icon {
    margin-left: 12px;

    font-size: 24px !important;
    color: #557ee5;
  }

  .text-field-component__password-icon {
    margin-right: 12px;

    font-size: 20px;
    color: rgb(0 0 0 / 0.7);

    cursor: pointer;
  }

  .text-field-component__input {
    width: 100%;
    height: 40px;
    padding: 0 16px;

    border: 0;
    border-radius: 14px;

    font-size: 16px;
    line-height: 20px;

    &:focus-visible {
      outline: 0;
    }
  }

  .text-field-component__label {
    position: absolute;
    top: 50%;
    left: 14px;

    background-color: white;

    font-size: 16px;
    line-height: 20px;
    color: rgb(0 0 0 / 0.6);

    pointer-events: none;

    transform: translateY(-50%);
    transition: all 0.05s linear;
  }

  .text-field-component__label--right {
    left: 48px;
  }

  .text-field-component__label--top {
    top: 0;
    left: 14px;

    padding: 0 4px;

    font-size: 14px;
    line-height: 18px;
  }

  .text-field-component__textarea-container {
    width: 100%;
    height: 100%;
    overflow: hidden;

    border-radius: 14px;
  }

  .text-field-component__textarea {
    width: 100%;
    height: 100%;
    padding: 16px;

    border: 0;

    font-size: 16px;
    line-height: 20px;

    resize: none;

    &:focus-visible {
      outline: 0;
    }
  }
</style>