<template>
  <div class="main-screen-restoraunt-card">
    <img
    alt="Изображение ресторана"
    class="main-screen-restoraunt-card__image"
    loading="lazy"
    :src="cardData.src">

    <div class="main-screen-restoraunt-card__info-container">
      <span class="main-screen-restoraunt-card__name">{{ cardData.name }}</span>

      <span class="main-screen-restoraunt-card__work-time">
        <span class="material-icons main-screen-restoraunt-card__work-time-icon">
          schedule
        </span>

        {{ cardData.openTime }} - {{ cardData.closeTime }}
      </span>
    </div>

    <span class="main-screen-restoraunt-card__rating">
      <span class="material-icons main-screen-restoraunt-card__rating-icon">
        star
      </span>

      <span class="main-screen-restoraunt-card__rating-text">
        {{ cardData.rating }}
      </span>
    </span>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { TRestorauntCard } from './types';

  export default defineComponent({
    name: 'MainScreenRestorauntCard',
    props: {
      cardData: {
        type: Object as PropType<TRestorauntCard>,
        required: true,
      },
    },
  });
</script>

<style lang="scss">
  @use '@/styles/variables' as *;

  .main-screen-restoraunt-card {
    display: flex;
    flex-direction: column;

    width: 100%;
  }

  .main-screen-restoraunt-card__image {
    width: 100%;
    margin-bottom: 16px;

    border-radius: 14px;

    cursor: pointer;

    object-fit: cover;

    transition: transform 0.07s ease;

    &:hover {
      transform: scale(1.04);
    }
  }

  .main-screen-restoraunt-card__info-container {
    display: flex;
    align-items: center;
    gap: 24px;

    width: 100%;
  }

  .main-screen-restoraunt-card__name {
    font-size: 32px;
    font-weight: 700;
  }

  .main-screen-restoraunt-card__work-time {
    display: flex;
    align-items: center;
    gap: 2px;

    font-size: 16px;
    font-weight: 500;
  }

  .main-screen-restoraunt-card__work-time-icon {
    font-size: 20px !important;

    user-select: none;
  }

  .main-screen-restoraunt-card__rating {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .main-screen-restoraunt-card__rating-icon {
    font-size: 20px !important;
    color: orange;
  }

  .main-screen-restoraunt-card__rating-text {
    font-size: 16px;
    font-weight: 500;
  }
</style>