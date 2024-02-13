<template>
  <div class="main-screen-restoraunt-list">
    <div
    v-for="(cardData, index) in restorauntCardListData"
    class="main-screen-restoraunt-list__card-container"
    :key="index">
      <RestorauntCard
      @click="restorauntCardClickHandler(cardData)"
      :cardData="cardData"/>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  import RestorauntCard, { TRestorauntCard } from './RestorauntCard';
  import burgerIcon from '@/assets/burger.png';

  export default defineComponent({
    name: 'MainScreenRestorauntList',
    components: {
      RestorauntCard,
    },
    setup() {
      const router = useRouter();

      const restorauntCardListData: Array<TRestorauntCard> = [
        {
          id: '1',
          name: 'Ресторан 111 1111 1111 11111',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: burgerIcon,
          promo: 'Тест',
        },
        {
          id: '2',
          name: 'Ресторан 2',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: burgerIcon,
          promo: 'Тест',
        },
        {
          id: '3',
          name: 'Ресторан 3',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: burgerIcon,
          promo: 'Тест',
        },
        {
          id: '3',
          name: 'Ресторан 4',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: burgerIcon,
          promo: 'Тест',
        },
        {
          id: '3',
          name: 'Ресторан 5',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: burgerIcon,
          promo: 'Тест',
        },
        {
          id: '3',
          name: 'Ресторан 6',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: burgerIcon,
          promo: 'Тест',
        },
        {
          id: '3',
          name: 'Ресторан 7',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: burgerIcon,
          promo: 'Тест',
        }, {
          id: '3',
          name: 'Ресторан 8',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: burgerIcon,
          promo: 'Тест',
        },
        {
          id: '3',
          name: 'Ресторан 9',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: burgerIcon,
          promo: 'Тест',
        },
        {
          id: '3',
          name: 'Ресторан 10',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: burgerIcon,
          promo: 'Тест',
        },
        {
          id: '3',
          name: 'Ресторан 11',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: burgerIcon,
          promo: 'Тест',
        },
        {
          id: '3',
          name: 'Ресторан 12',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: burgerIcon,
          promo: 'Тест',
        },
        {
          id: '3',
          name: 'Ресторан 13',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: burgerIcon,
          promo: 'Тест',
        },
        {
          id: '3',
          name: 'Ресторан 14',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: burgerIcon,
          promo: 'Тест',
        },
      ];

      function restorauntCardClickHandler(cardData: TRestorauntCard) {
        router.push({
          name: 'restoraunt',
          params: {
            id: cardData.id,
          },
        }).catch(console.error);
      }

      return {
        restorauntCardListData,
        restorauntCardClickHandler,
      };
    },
  });
</script>

<style lang="scss">
  .main-screen-restoraunt-list {
    display: flex;
    flex-wrap: wrap;
    row-gap: 24px;

    width: calc(100% + 20px);
    margin-left: -10px;

    @media screen and (width <= 1023px) {
      width: calc(100% + 16px);
      margin-left: -8px;
    }
    @media screen and (width <= 1023px) {
      width: calc(100% + 12px);
      margin-left: -6px;
    }
    @media screen and (width <= 767px) {
      row-gap: 16px;

      width: calc(100% + 8px);
      margin-left: -4px;
    }
    @media screen and (width <= 575px) {
      width: 100%;
      margin-left: 0;
    }
  }

  .main-screen-restoraunt-list__card-container {
    width: 25%;
    padding: 0 10px;

    @media screen and (width <= 1023px) {
      padding: 0 8px;
    }
    @media screen and (width <= 1023px) {
      width: calc(100% / 3);
      padding: 0 6px;
    }
    @media screen and (width <= 767px) {
      width: calc(100% / 2);
      padding: 0 4px;
    }
    @media screen and (width <= 575px) {
      width: 100%;
      padding: 0;
    }
  }
</style>