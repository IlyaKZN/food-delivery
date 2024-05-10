<template>
  <div :class="$style.card">
    <img
    v-if="windowData.width > 575"
    :class="$style.image"
    :src="data.img">

    <div :class="$style.info">
      <h4 :class="$style.name">
        {{ data.name }}
      </h4>

      <p :class="$style.address">
        {{ data.address }}
      </p>

      <ButtonComponent
      :class="$style.button"
      text="Редактировать"/>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { storeToRefs } from 'pinia';
  import ButtonComponent from '@/components/Button';
  import useClientStore from '@/store/client';
  import { TParnterRestaurantCardData } from './types';

  export default defineComponent({
    name: 'PartnerRestaurantListRestaurantCard',
    components: {
      ButtonComponent,
    },
    props: {
      data: {
        type: Object as PropType<TParnterRestaurantCardData>,
        required: true,
      },
    },
    setup() {
      const clientStore = useClientStore();

      const { windowData } = storeToRefs(clientStore);

      return {
        windowData,
      };
    },
  });
</script>

<style module lang="scss">
  @use '@/styles/variables.scss' as *;

  .card {
    display: flex;
    align-items: center;
    gap: 18px;

    width: 100%;
    height: 192px;
    padding: 16px;

    background-color: white;
    filter: drop-shadow(0 0 8px rgb(0 0 0 / 0.25));
    border-radius: 14px;

    @media screen and (width <= 575px) {
      height: 140px;
      padding: 10px;
    }
  }

  .image {
    width: 100%;
    max-width: 284px;
    height: 100%;
    object-fit: cover;

    border-radius: 10px;

    @media screen and (width <= 767px) {
      max-width: 160px;
      height: 160px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .name {
    margin-bottom: 20px;
    overflow: hidden;

    font-size: 24px;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media screen and (width <= 575px) {
      margin-bottom: 10px;
    }
  }

  .address {
    margin-bottom: auto;
    overflow: hidden;

    font-size: 20px;
    font-weight: 600;
    color: rgba($color-text-primary, 0.64);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .button {
    width: max-content;

    @media screen and (width <= 575px) {
      margin-left: auto;
    }
  }
</style>