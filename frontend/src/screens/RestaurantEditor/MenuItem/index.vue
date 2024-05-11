<template>
  <div :class="$style.container">
    <img
    :class="$style.image"
    :src="itemData.imgSrc">

    <div :class="$style.info">
      <span :class="$style.name">
        {{ itemData.name }}
      </span>

      <ButtonComponent
      @click="$emit('editButtonClick', itemData)"
      :class="$style.button"
      text="Редактировать"/>
    </div>
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
    display: flex;
    gap: 12px;

    width: 100%;
    height: 124px;
    padding: 10px;

    border-radius: 14px;
    box-shadow: 0 0 8px rgb(0 0 0 / 0.4);
  }

  .image {
    height: 100%;

    border-radius: 10px;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .name {
    display: -webkit-box;

    overflow: hidden;

    font-size: 20px;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-clamp: 2;
  }

  .button {
    width: max-content;
  }
</style>