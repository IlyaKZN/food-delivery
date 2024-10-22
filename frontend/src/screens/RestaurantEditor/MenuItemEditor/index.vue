<template>
  <div :class="$style.container">
    <img
    @click="selectImage"
    :class="$style.image"
    :src="itemData.imgSrc">

    <div :class="$style.body">
      <div :class="$style.column">
        <TextFieldComponent label="Название"/>

        <TextFieldComponent label="Цена, ₽"/>

        <TextFieldComponent label="Граммовка, гр"/>

        <TextFieldComponent
        label="Состав"
        multiline/>
      </div>

      <div :class="$style.column">
        <CheckboxComponent text="Нет в наличии"/>

        <SelectorComponent
        v-model="status"
        label="Статус"
        :list="statusList"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, ref } from 'vue';
  import { TMenuItem } from '@/types/api';
  import TextFieldComponent from '@/components/TextField';
  import CheckboxComponent from '@/components/Checkbox';
  import SelectorComponent, { TSelectorList } from '@/components/Selector';
  import useUpload from '@/hooks/useUpload';

  export default defineComponent({
    name: 'MenuItemEditor',
    components: {
      TextFieldComponent,
      CheckboxComponent,
      SelectorComponent,
    },
    props: {
      itemData: {
        type: Object as PropType<TMenuItem>,
        required: true,
      },
    },
    setup() {
      const status = ref('blank');

      const statusList: TSelectorList = [
        {
          text: 'Без статуса',
          value: 'blank',
        },
        {
          text: 'Акция',
          value: 'promotion',
        },
        {
          text: 'Новое',
          value: 'new',
        },
        {
          text: 'Хит',
          value: 'popular',
        },
      ];

      async function selectImage() {
        const file = await useUpload();

        // eslint-disable-next-line no-console
        console.log(file);
      }

      return {
        statusList,
        status,

        selectImage,
      };
    },
  });
</script>

<style module lang="scss">
  .container {
    display: flex;
    gap: 20px;

    width: 1100px;
    padding: 16px;
  }

  .image {
    width: 200px;
    height: 200px;

    border-radius: 10px;

    cursor: pointer;
    object-fit: cover;

    transition: filter 0.05s linear;

    &:hover {
      filter: brightness(80%);
    }
  }

  .body {
    display: flex;
    gap: 20px;
  }

  .column {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>