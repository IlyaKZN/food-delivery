<template>
  <div :class="$style.selector">
    <DropDownComponent :class="$style['drop-down']">
      <template #default="{ clickHandler }">
        <!-- <ButtonComponent
      @click.stop="clickHandler"
      :class="$style['sort-button']"
      icon="expand_more"
      iconPosition="left"
      :text="activeItem?.text"
      type="base"/> -->

        <TextFieldComponent
        @click.stop="clickHandler"
        :class="$style.textfield"
        icon="expand_more"
        :label="label"
        :modelValue="activeItem?.text"
        readonly/>
      </template>

      <template #overlay>
        <div :class="$style.popup">
          <div :class="$style['popup-content']">
            <ButtonComponent
            v-for="buttonData in list"
            @click="$emit('update:modelValue', buttonData.value)"
            :class="`${$style['select-button']} ${buttonData.value === modelValue ? $style['select-button--active'] : ''}`"
            :text="buttonData.text"
            :key="buttonData.value"/>
          </div>
        </div>
      </template>
    </DropDownComponent>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue';
  import ButtonComponent from '../Button';
  import DropDownComponent from '@/components/DropDown';
  import TextFieldComponent from '../TextField';
  import { TSelectorList } from './types';

  export default defineComponent({
    name: 'SelectorComponent',
    components: {
      DropDownComponent,
      ButtonComponent,
      TextFieldComponent,
    },
    props: {
      list: {
        type: Array as PropType<TSelectorList>,
        required: true,
      },
      modelValue: {
        type: [String, Number, Array],
        required: true,
      },
      label: {
        type: String,
        default: '',
      },
    },
    emits: ['update:modelValue'],
    setup(props) {
      const activeItem = computed(() => props.list.find((listItem) => listItem.value === props.modelValue));

      return {
        activeItem,
      };
    },
  });
</script>

<style module lang="scss">
  @use '@/styles/variables' as *;

  .selector {
    // position: relative;
  }

  .sort-button {
    width: max-content;
    min-width: min-content;
    max-width: max-content;
    height: 100%;
    padding: 0 10px;
  }

  .popup {
    width: 100%;
    height: max-content;
    overflow: hidden;
    overscroll-behavior: contain;

    background-color: white;
  }

  .popup-content {
    display: flex;
    flex-direction: column;
    gap: 4px;

    width: 100%;
    height: 100%;
    padding: 8px;
    overflow: auto;
  }

  .select-button {
    justify-content: flex-start;

    min-height: 40px;
    padding-left: 20px;

    background-color: white;

    font-size: 16px;
  }

  .select-button--active {
    background-color: $color-app-primary;
  }

  .textfield {
    cursor: pointer;

    input {
      padding-left: 4px;

      cursor: pointer;
    }
  }
</style>