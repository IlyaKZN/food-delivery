<template>
  <div class="main-screen-special-offers-carousel">
    <h2 class="main-screen-special-offers-carousel__title">
      Акции
    </h2>

    <div class="main-screen-special-offers-carousel__content">
      <ButtonComponent
      @click="goToPreviousSlide"
      class="main-screen-special-offers-carousel__swiper-nav-button"
      icon="chevron_left"/>

      <div class="main-screen-special-offers-carousel__swiper">
        <swiper-container
        class="main-screen-special-offers-carousel__swiper-container"
        height="528"
        :slidesPerView="3"
        spaceBetween="32"
        ref="swiper">
          <swiper-slide
          v-for="(slideData, index) in slideDataList"
          @click="console.log"
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
      icon="chevron_right"/>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import ButtonComponent from '@/components/Button';

  export default defineComponent({
    name: 'MainScreenSpecialOffersCarousel',
    components: {
      ButtonComponent,
    },
    setup() {
      const swiper = ref();

      function goToNextSlide() {
        swiper.value.swiper.slideNext();
      }

      function goToPreviousSlide() {
        swiper.value.swiper.slidePrev();
      }

      const slideDataList = [
        {
          img: 'https://s3-alpha-sig.figma.com/img/c665/90d7/4470d72d426a8217d91c2cd0c7ae7194?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pWXuuZcDo-q3RjWIHvqfZ35QCROta1AOaO-ScDTGEykbhR9i3dD2ZjpJY8xG6HiZSYjDjKR5ZgE8bEeEHA4Nv2jZ9eaV~Q52e-UGuizDURiYgnfiF61bEcEBGfEJ1Te6MAnOrIyWFWs6WnyUdtdX8kC7zcB4UTPjXjQZ8DQDRkiw3ICckl2rKA41o0vtgd2h-mXxvNtLP3fVAgfY6mjMJD5TvtzeoMJFyf9dlpZwxokDrVjTvU6B5Of1QDsnSr0uE4fmd2GJCQfq~RxRhDxg38OHRPJZALNf~75v0sFCfPo-rr8RMNK29g5y4NB8SS4H5FgC7Ux9a5QQ~BxakwDiHQ__',
          callback() {

          },
        },
        {
          img: 'https://s3-alpha-sig.figma.com/img/c665/90d7/4470d72d426a8217d91c2cd0c7ae7194?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pWXuuZcDo-q3RjWIHvqfZ35QCROta1AOaO-ScDTGEykbhR9i3dD2ZjpJY8xG6HiZSYjDjKR5ZgE8bEeEHA4Nv2jZ9eaV~Q52e-UGuizDURiYgnfiF61bEcEBGfEJ1Te6MAnOrIyWFWs6WnyUdtdX8kC7zcB4UTPjXjQZ8DQDRkiw3ICckl2rKA41o0vtgd2h-mXxvNtLP3fVAgfY6mjMJD5TvtzeoMJFyf9dlpZwxokDrVjTvU6B5Of1QDsnSr0uE4fmd2GJCQfq~RxRhDxg38OHRPJZALNf~75v0sFCfPo-rr8RMNK29g5y4NB8SS4H5FgC7Ux9a5QQ~BxakwDiHQ__',
          callback() {

          },
        },
        {
          img: 'https://s3-alpha-sig.figma.com/img/c665/90d7/4470d72d426a8217d91c2cd0c7ae7194?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pWXuuZcDo-q3RjWIHvqfZ35QCROta1AOaO-ScDTGEykbhR9i3dD2ZjpJY8xG6HiZSYjDjKR5ZgE8bEeEHA4Nv2jZ9eaV~Q52e-UGuizDURiYgnfiF61bEcEBGfEJ1Te6MAnOrIyWFWs6WnyUdtdX8kC7zcB4UTPjXjQZ8DQDRkiw3ICckl2rKA41o0vtgd2h-mXxvNtLP3fVAgfY6mjMJD5TvtzeoMJFyf9dlpZwxokDrVjTvU6B5Of1QDsnSr0uE4fmd2GJCQfq~RxRhDxg38OHRPJZALNf~75v0sFCfPo-rr8RMNK29g5y4NB8SS4H5FgC7Ux9a5QQ~BxakwDiHQ__',
          callback() {

          },
        },
        {
          img: 'https://s3-alpha-sig.figma.com/img/c665/90d7/4470d72d426a8217d91c2cd0c7ae7194?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pWXuuZcDo-q3RjWIHvqfZ35QCROta1AOaO-ScDTGEykbhR9i3dD2ZjpJY8xG6HiZSYjDjKR5ZgE8bEeEHA4Nv2jZ9eaV~Q52e-UGuizDURiYgnfiF61bEcEBGfEJ1Te6MAnOrIyWFWs6WnyUdtdX8kC7zcB4UTPjXjQZ8DQDRkiw3ICckl2rKA41o0vtgd2h-mXxvNtLP3fVAgfY6mjMJD5TvtzeoMJFyf9dlpZwxokDrVjTvU6B5Of1QDsnSr0uE4fmd2GJCQfq~RxRhDxg38OHRPJZALNf~75v0sFCfPo-rr8RMNK29g5y4NB8SS4H5FgC7Ux9a5QQ~BxakwDiHQ__',
          callback() {

          },
        },
        {
          img: 'https://s3-alpha-sig.figma.com/img/c665/90d7/4470d72d426a8217d91c2cd0c7ae7194?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pWXuuZcDo-q3RjWIHvqfZ35QCROta1AOaO-ScDTGEykbhR9i3dD2ZjpJY8xG6HiZSYjDjKR5ZgE8bEeEHA4Nv2jZ9eaV~Q52e-UGuizDURiYgnfiF61bEcEBGfEJ1Te6MAnOrIyWFWs6WnyUdtdX8kC7zcB4UTPjXjQZ8DQDRkiw3ICckl2rKA41o0vtgd2h-mXxvNtLP3fVAgfY6mjMJD5TvtzeoMJFyf9dlpZwxokDrVjTvU6B5Of1QDsnSr0uE4fmd2GJCQfq~RxRhDxg38OHRPJZALNf~75v0sFCfPo-rr8RMNK29g5y4NB8SS4H5FgC7Ux9a5QQ~BxakwDiHQ__',
          callback() {

          },
        },
        {
          img: 'https://s3-alpha-sig.figma.com/img/c665/90d7/4470d72d426a8217d91c2cd0c7ae7194?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pWXuuZcDo-q3RjWIHvqfZ35QCROta1AOaO-ScDTGEykbhR9i3dD2ZjpJY8xG6HiZSYjDjKR5ZgE8bEeEHA4Nv2jZ9eaV~Q52e-UGuizDURiYgnfiF61bEcEBGfEJ1Te6MAnOrIyWFWs6WnyUdtdX8kC7zcB4UTPjXjQZ8DQDRkiw3ICckl2rKA41o0vtgd2h-mXxvNtLP3fVAgfY6mjMJD5TvtzeoMJFyf9dlpZwxokDrVjTvU6B5Of1QDsnSr0uE4fmd2GJCQfq~RxRhDxg38OHRPJZALNf~75v0sFCfPo-rr8RMNK29g5y4NB8SS4H5FgC7Ux9a5QQ~BxakwDiHQ__',
          callback() {

          },
        },
        {
          img: 'https://s3-alpha-sig.figma.com/img/c665/90d7/4470d72d426a8217d91c2cd0c7ae7194?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pWXuuZcDo-q3RjWIHvqfZ35QCROta1AOaO-ScDTGEykbhR9i3dD2ZjpJY8xG6HiZSYjDjKR5ZgE8bEeEHA4Nv2jZ9eaV~Q52e-UGuizDURiYgnfiF61bEcEBGfEJ1Te6MAnOrIyWFWs6WnyUdtdX8kC7zcB4UTPjXjQZ8DQDRkiw3ICckl2rKA41o0vtgd2h-mXxvNtLP3fVAgfY6mjMJD5TvtzeoMJFyf9dlpZwxokDrVjTvU6B5Of1QDsnSr0uE4fmd2GJCQfq~RxRhDxg38OHRPJZALNf~75v0sFCfPo-rr8RMNK29g5y4NB8SS4H5FgC7Ux9a5QQ~BxakwDiHQ__',
          callback() {

          },
        },
        {
          img: 'https://s3-alpha-sig.figma.com/img/c665/90d7/4470d72d426a8217d91c2cd0c7ae7194?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pWXuuZcDo-q3RjWIHvqfZ35QCROta1AOaO-ScDTGEykbhR9i3dD2ZjpJY8xG6HiZSYjDjKR5ZgE8bEeEHA4Nv2jZ9eaV~Q52e-UGuizDURiYgnfiF61bEcEBGfEJ1Te6MAnOrIyWFWs6WnyUdtdX8kC7zcB4UTPjXjQZ8DQDRkiw3ICckl2rKA41o0vtgd2h-mXxvNtLP3fVAgfY6mjMJD5TvtzeoMJFyf9dlpZwxokDrVjTvU6B5Of1QDsnSr0uE4fmd2GJCQfq~RxRhDxg38OHRPJZALNf~75v0sFCfPo-rr8RMNK29g5y4NB8SS4H5FgC7Ux9a5QQ~BxakwDiHQ__',
          callback() {

          },
        },
        {
          img: 'https://s3-alpha-sig.figma.com/img/c665/90d7/4470d72d426a8217d91c2cd0c7ae7194?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pWXuuZcDo-q3RjWIHvqfZ35QCROta1AOaO-ScDTGEykbhR9i3dD2ZjpJY8xG6HiZSYjDjKR5ZgE8bEeEHA4Nv2jZ9eaV~Q52e-UGuizDURiYgnfiF61bEcEBGfEJ1Te6MAnOrIyWFWs6WnyUdtdX8kC7zcB4UTPjXjQZ8DQDRkiw3ICckl2rKA41o0vtgd2h-mXxvNtLP3fVAgfY6mjMJD5TvtzeoMJFyf9dlpZwxokDrVjTvU6B5Of1QDsnSr0uE4fmd2GJCQfq~RxRhDxg38OHRPJZALNf~75v0sFCfPo-rr8RMNK29g5y4NB8SS4H5FgC7Ux9a5QQ~BxakwDiHQ__',
          callback() {

          },
        },
        {
          img: 'https://s3-alpha-sig.figma.com/img/c665/90d7/4470d72d426a8217d91c2cd0c7ae7194?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pWXuuZcDo-q3RjWIHvqfZ35QCROta1AOaO-ScDTGEykbhR9i3dD2ZjpJY8xG6HiZSYjDjKR5ZgE8bEeEHA4Nv2jZ9eaV~Q52e-UGuizDURiYgnfiF61bEcEBGfEJ1Te6MAnOrIyWFWs6WnyUdtdX8kC7zcB4UTPjXjQZ8DQDRkiw3ICckl2rKA41o0vtgd2h-mXxvNtLP3fVAgfY6mjMJD5TvtzeoMJFyf9dlpZwxokDrVjTvU6B5Of1QDsnSr0uE4fmd2GJCQfq~RxRhDxg38OHRPJZALNf~75v0sFCfPo-rr8RMNK29g5y4NB8SS4H5FgC7Ux9a5QQ~BxakwDiHQ__',
          callback() {

          },
        },
      ];

      return {
        swiper,
        slideDataList,
        goToNextSlide,
        goToPreviousSlide,
      };
    },
  });
</script>

<style lang="scss">
  .main-screen-special-offers-carousel__title {
    margin-bottom: 20px;

    font-size: 48px;
    font-weight: 700;
  }

  .main-screen-special-offers-carousel__content {
    display: flex;
    align-items: center;
    gap: 26px;
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
  }

  .main-screen-special-offers-carousel__swiper-container {
    display: flex;
    gap: 32px;

    height: 13vw;
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
  }
</style>