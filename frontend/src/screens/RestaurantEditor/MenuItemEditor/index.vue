<template>
  <div :class="$style.container">
    <img
    @click="selectImage"
    :class="$style.image"
    :src="itemData.imgSrc">
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { TMenuItem } from '@/types/api';
  import useUpload from '@/hooks/useUpload';

  export default defineComponent({
    name: 'MenuItemEditor',
    props: {
      itemData: {
        type: Object as PropType<TMenuItem>,
        required: true,
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
    width: 1000px;
    height: 200px;
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
</style>