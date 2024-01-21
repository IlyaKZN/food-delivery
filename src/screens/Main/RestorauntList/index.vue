<template>
  <div class="main-screen-restoraunt-list">
    <RestorauntCard
    v-for="(cardData, index) in restorauntCardListData"
    @click="restorauntCardClickHandler(cardData)"
    :cardData="cardData"
    :key="index"/>
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
          name: 'Ресторан 1',
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
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px 24px;

    width: 100%;
  }
</style>