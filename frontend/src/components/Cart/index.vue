<template>
  <div class="cart-component">
    <h3 class="cart-component__title">
      Корзина
    </h3>

    <ul
    class="cart-component__items-list"
    :class="{
      'cart-component__items-list--with-scroll' :itemsContainerHasScroll
    }"
    ref="itemsContainer">
      <template
      v-for="(cartItem, index) in formattedItemList"
      :key="cartItem.id">
        <li class="cart-component__item">
          <CartItemComponent
          @decr-button-click="itemDecrButtonClickHandler"
          @delete-button-click="itemDeleteButtonClickHandler"
          @inc-button-click="itemIncButtonClickHandler"
          :itemData="cartItem"/>
        </li>

        <div
        v-if="index !== formattedItemList.length - 1"
        class="cart-component__separator"/>
      </template>
    </ul>

    <div class="cart-component__button-container">
      <ButtonComponent
      class="cart-component__button--next"
      text="К оплате"
      type="secondary"/>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref, computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import ButtonComponent from '../Button';
  import CartItemComponent from '../CartItem';
  import useCartStore from '@/store/cart';
  import { TMenuItem } from '@/types/api';
  import { TCartItem } from '../CartItem/types';

  export default defineComponent({
    name: 'CartComponent',
    components: {
      ButtonComponent,
      CartItemComponent,
    },
    setup() {
      const itemsContainer = ref<HTMLDivElement>();
      const itemsContainerHasScroll = ref(false);

      const cartStore = useCartStore();

      const { cartItemList } = storeToRefs(cartStore);

      const formattedItemList = computed<Array<TCartItem>>(() => {
        const itemMap: Record<string, TCartItem> = {};

        cartItemList.value.forEach((cartItem) => {
          const { id, imgSrc, name, price } = cartItem;

          if (itemMap[cartItem.id]) {
            itemMap[cartItem.id].count += 1;
            itemMap[cartItem.id].price += cartItem.price;
          } else {
            itemMap[cartItem.id] = {
              id,
              imgSrc,
              name,
              price,
              count: 1,
              emitData: cartItem,
            };
          }
        });

        return Object.values(itemMap);
      });

      function itemsContainerResizeHandler() {
        itemsContainerHasScroll.value = itemsContainer.value!.scrollHeight > itemsContainer.value!.clientHeight;
      }

      function itemDeleteButtonClickHandler(itemData: TMenuItem) {
        cartStore.cartItemList = cartItemList.value.filter((item) => item.id !== itemData.id);
      }

      function itemIncButtonClickHandler(itemData: TMenuItem) {
        cartStore.cartItemList.push(itemData);
      }

      function itemDecrButtonClickHandler(itemData: TMenuItem) {
        let findedIndex = -1;

        for (let i = cartItemList.value.length - 1; i >= 0; i -= 1) {
          if (cartItemList.value[i].id === itemData.id) {
            findedIndex = i;

            break;
          }
        }

        if (findedIndex > -1) {
          cartStore.cartItemList.splice(findedIndex, 1);
        }
      }

      onMounted(() => {
        const resizeObserver = new ResizeObserver(itemsContainerResizeHandler);

        resizeObserver.observe(itemsContainer.value!);
      });

      return {
        itemsContainer,
        itemsContainerHasScroll,
        formattedItemList,

        itemDeleteButtonClickHandler,
        itemIncButtonClickHandler,
        itemDecrButtonClickHandler,
      };
    },
  });
</script>

<style lang="scss">
  .cart-component {
    display: flex;
    flex-direction: column;
    gap: 14px;

    width: 100%;
    max-width: 320px;
    height: calc(100vh - 300px);
    padding: 14px 4px 14px 14px;
    overflow: hidden;

    border-radius: 14px;
    box-shadow: 0 0 8px rgb(0 0 0 / 0.4);
  }

  .cart-component__title {
    font-size: 24px;
    font-weight: 500;
  }

  .cart-component__items-list {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 10px;

    width: 100%;
    padding-right: 10px;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 6px;
    }
  }

  .cart-component__items-list--with-scroll {
    padding-right: 4px;
  }

  .cart-component__separator {
    width: 100%;
    min-height: 1px;

    background-color: #d9d9d9;
  }

  .cart-component__button-container {
    margin-right: 8px;
  }
</style>