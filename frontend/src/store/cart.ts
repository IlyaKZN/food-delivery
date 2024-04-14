import { defineStore } from 'pinia';
import { TMenuItem } from '@/types/api';

type TCartState = {
  cartItemList: Array<TMenuItem>,
};

const useCartStore = defineStore('cart', {
  state: (): TCartState => ({
    cartItemList: [],
  }),
  getters: {
    orderCost(state) {
      return state.cartItemList.reduce((acc, cartItem) => acc + cartItem.price, 0);
    },
  },
  actions: {
    clearCart() {
      this.cartItemList = [];
    },
  },
});

export default useCartStore;
