<template>
  <div class="main-screen-special-offers-carousel">
    <div class="main-screen-special-offers-carousel__content">
      <ButtonComponent
      @click="goToPreviousSlide"
      class="main-screen-special-offers-carousel__swiper-nav-button"
      :class="{
        'main-screen-special-offers-carousel__swiper-nav-button--disabled': isLeftLimit,
      }"
      :disabled="isLeftLimit"
      icon="chevron_left"/>

      <div class="main-screen-special-offers-carousel__swiper">
        <swiper-container
        @slide-change="console.log"
        class="main-screen-special-offers-carousel__swiper-container"
        ref="swiper">
          <swiper-slide
          v-for="(slideData, index) in slideDataList"
          :key="index">
            <img
            alt="Акция"
            class="main-screen-special-offers-carousel__swiper-slide-image"
            :src="slideData.img">
          </swiper-slide>
        </swiper-container>
      </div>

      <ButtonComponent
      @click="goToNextSlide"
      class="main-screen-special-offers-carousel__swiper-nav-button"
      :class="{
        'main-screen-special-offers-carousel__swiper-nav-button--disabled': isRightLimit,
      }"
      :disabled="isRightLimit"
      icon="chevron_right"/>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from 'vue';
  import ButtonComponent from '@/components/Button';
  import specialOfferIcon from '@/assets/special-offer.png';

  export default defineComponent({
    name: 'MainScreenSpecialOffersCarousel',
    components: {
      ButtonComponent,
    },
    setup() {
      const swiper = ref();
      const isLeftLimit = ref(true);
      const isRightLimit = ref(false);

      function initSwiper() {
        const swiperParams = {
          height: 528,
          slidesPerView: 3,
          breakpoints: {
            0: {
              slidesPerView: 1.1,
              spaceBetween: 8,
            },
            576: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
            1400: {
              spaceBetween: 20,
            },
          },
        };

        swiper.value.addEventListener('swiperslidechange', (event: CustomEvent) => {
          if (event.detail[0].activeIndex === 0) {
            isLeftLimit.value = true;
          } else {
            isLeftLimit.value = false;
          }

          if (event.detail[0].isEnd) {
            isRightLimit.value = true;
          } else {
            isRightLimit.value = false;
          }
        });

        // now we need to assign all parameters to Swiper element
        Object.assign(swiper.value, swiperParams);

        // and now initialize it
        swiper.value.initialize();
      }

      function goToNextSlide() {
        swiper.value.swiper.slideNext();
      }

      function goToPreviousSlide() {
        swiper.value.swiper.slidePrev();
      }

      const slideDataList = [
        {
          img: specialOfferIcon,
          callback() {

          },
        },
        {
          img: specialOfferIcon,
          callback() {

          },
        },
        {
          img: specialOfferIcon,
          callback() {

          },
        },
        {
          img: specialOfferIcon,
          callback() {

          },
        },
        {
          img: specialOfferIcon,
          callback() {

          },
        },
        {
          img: specialOfferIcon,
          callback() {

          },
        },
        {
          img: specialOfferIcon,
          callback() {

          },
        },
        {
          img: specialOfferIcon,
          callback() {

          },
        },
        {
          img: specialOfferIcon,
          callback() {

          },
        },
        {
          img: specialOfferIcon,
          callback() {

          },
        },
      ];

      const unwatchSwiper = watch(swiper, () => {
        if (swiper.value) {
          initSwiper();

          unwatchSwiper();
        }
      });

      return {
        swiper,
        slideDataList,
        isLeftLimit,
        isRightLimit,
        goToNextSlide,
        goToPreviousSlide,
      };
    },
  });
</script>

<style lang="scss">
  .main-screen-special-offers-carousel__content {
    display: flex;
    align-items: center;
    gap: 26px;

    height: 100%;
  }

  .main-screen-special-offers-carousel__swiper {
    overflow: hidden;
  }

  .main-screen-special-offers-carousel__swiper-nav-button {
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 64px;
    height: 64px;

    border-radius: 50%;

    @media screen and (width <= 1023px) {
      display: none;
    }
  }

  .main-screen-special-offers-carousel__swiper-nav-button--disabled {
    opacity: 0.5;
  }

  .main-screen-special-offers-carousel__swiper-container {
    display: flex;
    gap: 32px;
  }

  .main-screen-special-offers-carousel__swiper-slide-image {
    width: 100%;
    height: 100%;

    border-radius: 16px;

    cursor: pointer;

    transition: filter 0.2s ease-out;

    &:hover {
      filter: brightness(110%);
    }

    @media screen and (width <= 575px) {
      width: 100%;
      padding: 0;
    }
  }
</style>