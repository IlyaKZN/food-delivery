<template>
  <div :class="$style.container">
    <img
    :class="$style.image"
    :src="itemData.imgSrc">

    <span :class="$style.name">
      {{ itemData.name }} {{ itemData.name }} {{ itemData.name }}
    </span>

    <ButtonComponent
    @click="$emit('editButtonClick', itemData)"
    :class="$style.button"
    text="Редактировать"/>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import ButtonComponent from '@/components/Button';
  import useUpload from '@/hooks/useUpload';
  import { TMenuItem } from '@/types/api';

  export default defineComponent({
    name: 'RestaurantEditorMenuItem',
    components: {
      ButtonComponent,
    },
    props: {
      itemData: {
        type: Object as PropType<TMenuItem>,
        required: true,
      },
    },
    emits: {
      editButtonClick(payload: TMenuItem) {
        return typeof payload === 'object';
      },
    },
    setup() {
      async function selectImage() {
        const file = await useUpload();

        // eslint-disable-next-line no-console
        console.log(file);
      }

      return {
        selectImage,
      };
    },
  });
</script>

<style module lang="scss">
  .container {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 12px;

    width: 100%;
    padding: 10px;

    border-radius: 14px;
    box-shadow: 0 0 8px rgb(0 0 0 / 0.4);
  }

  .image {
    grid-row: 1 / 3;

    width: 104px;
    height: 104px;

    border-radius: 10px;

    @media screen and (width <= 575px) {
      grid-row: 1 / 2;
    }
  }

  .name {
    display: -webkit-box;

    height: min-content;
    overflow: hidden;

    font-size: 20px;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-clamp: 2;

    @media screen and (width <= 575px) {
      -webkit-line-clamp: 4;
      line-clamp: 4;
    }
  }

  .button {
    width: max-content;

    @media screen and (width <= 575px) {
      grid-column: 1 / 3;

      width: 100%;
      margin-left: auto;
    }
  }
</style>