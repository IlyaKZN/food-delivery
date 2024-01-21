<template>
  <div class="restoraunt-screen">
    <div class="restoraunt-screen__content">
      <div class="restoraunt-screen__left-column">
        <ButtonComponent
        @click="backButtonClickHandler"
        class="restoraunt-screen__back-button"
        type="base">
          <span class="material-icons">
            arrow_back
          </span>

          <span>Рестораны</span>
        </ButtonComponent>

        <ul class="restoraunt-screen__menu-list">
          <li
          v-for="menuSectionData in menuSectionDataList"
          :key="menuSectionData.title">
            <ButtonComponent
            @click="menuCategoryButtonClickHandler(menuSectionData.title)"
            class="restoraunt-screen__menu-button"
            :class="{
              'restoraunt-screen__menu-button--active': menuSectionData.title === activeCategoryMenu,
            }"
            :text="menuSectionData.title"
            type="base"/>
          </li>
        </ul>
      </div>

      <div class="restoraunt-screen__center-column">
        <div class="restoraunt-screen__image-container">
          <img
          alt="Фото ресторана"
          class="restoraunt-screen__restoraunt-image"
          :src="restImg">

          <div class="restoraunt-screen__image-gradient"/>

          <span class="restoraunt-screen__image-restoraunt-name">Крошка картошка</span>
        </div>

        <template
        v-for="sectionData in menuSectionDataList"
        :key="sectionData.title">
          <h2
          class="restoraunt-screen__menu-section-title"
          :id="sectionData.title">
            {{ sectionData.title }}
          </h2>

          <div class="restoraunt-screen__menu-section-grid">
            <MenuItemCard
            v-for="itemData in sectionData.cardList"
            :itemData="itemData"
            :key="itemData.id"/>
          </div>
        </template>
      </div>

      <div class="restoraunt-screen__right-column"/>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import ButtonComponent from '@/components/Button';
  import MenuItemCard, { TMenuItemCard } from './MenuItemCard';
  import restImg from '@/assets/rest.png';
  import potatoImg from '@/assets/potato.png';
  import pizzaImg from '@/assets/pizza.png';

  export default defineComponent({
    name: 'RestorauntScreen',
    components: {
      ButtonComponent,
      MenuItemCard,
    },
    setup() {
      const router = useRouter();
      const activeCategoryMenu = ref('Картофель');

      const menuSectionDataList: Array<{ title: string, cardList: Array<TMenuItemCard> }> = [
        {
          title: 'Картофель',
          cardList: [
            {
              id: '1',
              imgSrc: potatoImg,
              name: 'Картофель по-деревенски',
              price: 220,
              weight: 120,
            },
            {
              id: '1',
              imgSrc: potatoImg,
              name: 'Картофель по-деревенски',
              price: 220,
              weight: 120,
            },
            {
              id: '1',
              imgSrc: potatoImg,
              name: 'Картофель по-деревенски',
              price: 220,
              weight: 120,
            },
            {
              id: '1',
              imgSrc: potatoImg,
              name: 'Картофель по-деревенски',
              price: 220,
              weight: 120,
            },
            {
              id: '1',
              imgSrc: potatoImg,
              name: 'Картофель по-деревенски',
              price: 220,
              weight: 120,
            },
            {
              id: '1',
              imgSrc: potatoImg,
              name: 'Картофель по-деревенски',
              price: 220,
              weight: 120,
            },
            {
              id: '1',
              imgSrc: potatoImg,
              name: 'Картофель по-деревенски',
              price: 220,
              weight: 120,
            },
            {
              id: '1',
              imgSrc: potatoImg,
              name: 'Картофель по-деревенски',
              price: 220,
              weight: 120,
            },
            {
              id: '1',
              imgSrc: potatoImg,
              name: 'Картофель по-деревенски',
              price: 220,
              weight: 120,
            },
            {
              id: '1',
              imgSrc: potatoImg,
              name: 'Картофель по-деревенски',
              price: 220,
              weight: 120,
            },
            {
              id: '1',
              imgSrc: potatoImg,
              name: 'Картофель по-деревенски',
              price: 220,
              weight: 120,
            },
          ],
        },
        {
          title: 'Пицца',
          cardList: [
            {
              id: '1',
              imgSrc: pizzaImg,
              name: 'Пицца',
              price: 700,
              weight: 600,
            },
            {
              id: '1',
              imgSrc: pizzaImg,
              name: 'Пицца',
              price: 700,
              weight: 600,
            },
            {
              id: '1',
              imgSrc: pizzaImg,
              name: 'Пицца',
              price: 700,
              weight: 600,
            },
            {
              id: '1',
              imgSrc: pizzaImg,
              name: 'Пицца',
              price: 700,
              weight: 600,
            },
            {
              id: '1',
              imgSrc: pizzaImg,
              name: 'Пицца',
              price: 700,
              weight: 600,
            },
            {
              id: '1',
              imgSrc: pizzaImg,
              name: 'Пицца',
              price: 700,
              weight: 600,
            },
            {
              id: '1',
              imgSrc: pizzaImg,
              name: 'Пицца',
              price: 700,
              weight: 600,
            },
            {
              id: '1',
              imgSrc: pizzaImg,
              name: 'Пицца',
              price: 700,
              weight: 600,
            },
            {
              id: '1',
              imgSrc: pizzaImg,
              name: 'Пицца',
              price: 700,
              weight: 600,
            },
          ],
        },
      ];

      function backButtonClickHandler() {
        if (window.history.state.back) {
          router.go(-1);
        } else {
          router.push({ name: 'main' });
        }
      }

      function menuCategoryButtonClickHandler(title: string) {
        document.querySelector(`#${title}`)?.scrollIntoView({
          behavior: 'smooth',
        });
      }

      return {
        backButtonClickHandler,
        menuCategoryButtonClickHandler,
        activeCategoryMenu,
        restImg,
        menuSectionDataList,
      };
    },
  });
</script>

<style lang="scss">
  @use '@/styles/variables' as *;

  .restoraunt-screen {
    display: flex;
    flex-grow: 1;
    justify-content: center;

    padding: 44px;
  }

  .restoraunt-screen__back-button {
    justify-content: flex-start;

    padding: 0 16px;
    margin-bottom: 40px;

    font-size: 24px;
  }

  .restoraunt-screen__left-column {
    position: sticky;
    top: 44px;
    left: 0;

    width: 210px;
    height: max-content;
  }

  .restoraunt-screen__right-column {
    position: sticky;
    top: 44px;
    right: 0;

    width: 320px;
    height: 600px;

    background-color: #eaeaea;
    border-radius: 14px;
  }

  .restoraunt-screen__content {
    position: relative;

    display: flex;
    justify-content: center;
    gap: 40px;

    width: 1686px;
  }

  .restoraunt-screen__image-container {
    position: relative;

    width: 100%;
    height: 370px;
    margin-bottom: 28px;
  }

  .restoraunt-screen__restoraunt-image {
    width: 100%;
    height: 100%;
    object-fit: cover;

    border-radius: 14px;
  }

  .restoraunt-screen__image-gradient {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 50%;

    background: linear-gradient(rgb(0 0 0 / 0.4), rgb(0 0 0 / 0));
    border-radius: 14px;

    content: '';
  }

  .restoraunt-screen__image-restoraunt-name {
    position: absolute;
    top: 20px;
    left: 30px;

    filter: drop-shadow(4px 4px 4px rgb(0 0 0 / 0.7));

    font-size: 64px;
    font-weight: 800;
    color: white;
  }

  .restoraunt-screen__menu-list {
    gap: 8px;
  }

  .restoraunt-screen__center-column {
    width: 1100px;

    @media (width < 1920px) {
      grid-template-columns: repeat(3, 1fr);

      width: 820px;
    }
  }

  .restoraunt-screen__menu-button {
    justify-content: flex-start;

    padding: 0 16px;
  }

  .restoraunt-screen__menu-button--active {
    background-color: rgb(205 205 205);
  }

  .restoraunt-screen__menu-section-title {
    margin: 32px 0 16px;

    font-size: 48px;
    font-weight: 700;
  }

  .restoraunt-screen__menu-section-grid {
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;

    @media (width < 1920px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>