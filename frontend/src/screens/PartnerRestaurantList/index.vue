<template>
  <div :class="$style.screen">
    <div :class="$style.content">
      <div :class="$style.header">
        <h2 :class="$style.title">
          Ваши рестораны
        </h2>

        <ButtonComponent
        :class="$style['add-button']"
        icon="add"
        iconPosition="left"
        :text="windowData.width < 768 ? '' : 'Добавить новый'"
        type="accent"/>
      </div>

      <div :class="$style['card-list']">
        <RestaurantCard
        v-for="restData in restaurantList"
        :data="restData"
        :key="restData.id"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { storeToRefs } from 'pinia';
  import restImg from '@/assets/rest.png';
  import RestaurantCard from './RestaurantCard';
  import ButtonComponent from '@/components/Button';
  import useClientStore from '@/store/client';
  import { TParnterRestaurantCardData } from './RestaurantCard/types';

  export default defineComponent({
    name: 'PartnerRestaurantListScreen',
    components: {
      RestaurantCard,
      ButtonComponent,
    },
    setup() {
      const clientStore = useClientStore();

      const { windowData } = storeToRefs(clientStore);

      const restaurantList = ref<Array<TParnterRestaurantCardData>>([]);

      for (let i = 1; i < 20; i += 1) {
        restaurantList.value.push(
          {
            id: String(i),
            address: 'Ул. Пушкина д.12',
            img: restImg,
            name: `Ресторан ${i}`,
          },
        );
      }

      return {
        restaurantList,
        windowData,
      };
    },
  });
</script>

<style module lang="scss">
  .screen {
    flex-grow: 1;

    padding: 116px 220px 52px;

    background-color: white;

    @media screen and (width <= 1400px) {
      padding-right: 100px;
      padding-left: 100px;
    }
    @media screen and (width <= 1023px) {
      padding-right: 40px;
      padding-left: 40px;
    }
    @media screen and (width <= 575px) {
      padding-top: 80px;
      padding-right: 14px;
      padding-left: 14px;
    }
  }

  .content {
    width: 100%;
    max-width: 847px;

    @media screen and (width <= 1023px) {
      max-width: 100%;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;

    margin-bottom: 14px;
  }

  .title {
    font-size: 32px;
    font-weight: 700;
  }

  .card-list {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (width <= 767px) {
      gap: 12px;
    }
  }

  .add-button {
    width: max-content;
  }
</style>