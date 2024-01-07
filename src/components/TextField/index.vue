<template>
  <div class="text-field-component">
    <span
    v-if="icon"
    class="text-field-component-icon material-icons">
      {{ icon }}
    </span>

    <input
    @blur="blurInputHandler"
    @focus="focusInputHandler"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    class="text-field-component__input"
    maxlength="30"
    spellcheck="false"
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
    class="text-field-component__placeholder"
    :class="{
      'text-field-component__placeholder--top': isPlaceholderOnTop,
      'text-field-component__placeholder--right': icon,
    }">
      <span>{{ placeholder }}</span>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, computed, PropType } from 'vue';

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
      type: {
        type: String as PropType<'default' | 'password' | 'phoneNumber'>,
        default: 'default',
      },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const focusedOnInput = ref(false);
      const isShowPassword = ref(false);

      const isPlaceholderOnTop = computed(() => {
        return props.modelValue || focusedOnInput.value;
      });

      function focusInputHandler() {
        focusedOnInput.value = true;

        if (!props.modelValue && props.type === 'phoneNumber') {
          emit('update:modelValue', '+79');
        }
      }

      function blurInputHandler() {
        focusedOnInput.value = false;
      }

      function changeVisibilityPassword() {
        isShowPassword.value = !isShowPassword.value;
      }

      return {
        isPlaceholderOnTop,
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
    min-height: 50px;
    overflow: visible;

    background: #fff;
    border-radius: 14px;
    outline: 2px solid #557ee5;
    outline-offset: -2px;
  }

  .text-field-component-icon {
    margin-left: 12px;

    font-size: 36px !important;
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
    height: 50px;
    padding: 0 12px;

    border: 0;
    border-radius: 14px;

    font-size: 20px;
    line-height: 24px;

    &:focus-visible {
      outline: 0;
    }
  }

  .text-field-component__placeholder {
    position: absolute;
    top: 50%;
    left: 14px;

    background-color: white;

    font-size: 20px;
    line-height: 24px;
    color: rgb(0 0 0 / 0.5);

    pointer-events: none;

    transform: translateY(-50%);
    transition: all 0.05s linear;
  }

  .text-field-component__placeholder--right {
    left: 62px;
  }

  .text-field-component__placeholder--top {
    top: 0;
    left: 14px;

    padding: 0 4px;

    font-size: 14px;
    line-height: 18px;
  }
</style>