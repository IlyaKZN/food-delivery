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
          :data-value="sectionData.title"
          ref="sectionTitles"
          :id="sectionData.title">
            {{ sectionData.title }}
          </h2>

          <div class="restoraunt-screen__menu-section-grid">
            <MenuItemCard
            v-for="itemData in sectionData.cardList"
            @add-button-click="menuItemAddButtonClickHandler"
            :itemData="itemData"
            :key="itemData.id"/>
          </div>
        </template>
      </div>

      <CartComponent class="restoraunt-screen__cart"/>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import ButtonComponent from '@/components/Button';
  import MenuItemCard from './MenuItemCard';
  import CartComponent from '@/components/Cart';
  import useCartStore from '@/store/cart';
  import restImg from '@/assets/rest.png';
  import potatoImg from '@/assets/potato.png';
  import pizzaImg from '@/assets/pizza.png';
  import { TMenuItem } from '@/types/api';

  export default defineComponent({
    name: 'RestorauntScreen',
    components: {
      ButtonComponent,
      MenuItemCard,
      CartComponent,
    },
    setup() {
      const router = useRouter();

      const cartStore = useCartStore();

      const activeCategoryMenu = ref('Картофель');
      const sectionTitles = ref<Array<HTMLElement>>();

      const menuSectionDataList: Array<{ title: string, cardList: Array<TMenuItem> }> = [
        {
          title: 'Картофель',
          cardList: new Array(14).fill('').map((_item, index) => {
            return {
              id: `potato-${index + 1}`,
              imgSrc: potatoImg,
              name: `Картофель по-деревенски ${index + 1}`,
              price: 20 * (index + 1),
              weight: 10 * (index + 1),
            };
          }),
        },
        {
          title: 'Пицца',
          cardList: new Array(14).fill('').map((_item, index) => {
            return {
              id: `Пицца-${index + 1}`,
              imgSrc: pizzaImg,
              name: `Пицца ${index + 1}`,
              price: 20 * (index + 1),
              weight: 10 * (index + 1),
            };
          }),
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

      function sectionIntersectionObserverHandler(entries: IntersectionObserverEntry[]) {
        entries.forEach((entry) => {
          if (entry.intersectionRatio) {
            activeCategoryMenu.value = (entry.target as HTMLElement).dataset.value!;
          }
        });
      }

      function menuItemAddButtonClickHandler(itemData: TMenuItem) {
        cartStore.cartItemList.push(itemData);
      }

      onMounted(() => {
        const observer = new IntersectionObserver(sectionIntersectionObserverHandler);

        sectionTitles.value?.forEach((sectionTitle) => {
          observer.observe(sectionTitle);
        });
      });

      return {
        sectionTitles,
        activeCategoryMenu,
        restImg,
        menuSectionDataList,

        backButtonClickHandler,
        menuCategoryButtonClickHandler,
        menuItemAddButtonClickHandler,
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

  .restoraunt-screen__cart {
    position: sticky;
    top: 44px;
    right: 0;
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
    display: flex;
    flex-direction: column;
    gap: 4px;
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