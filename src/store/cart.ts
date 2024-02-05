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
    // addItem(itemData: TMenuItem) {
    //   const itemIndex = this.cartItemList.findIndex((item) => item.id === itemData.id);

    //   if (itemIndex !== -1) {
    //     const item = this.cartItemList[itemIndex];

    //     this.cartItemList[itemIndex] = {
    //       ...item,
    //       count: item.count + 1,
    //       price: item.price + itemData.price,
    //     };
    //   } else {
    //     this.cartItemList.push({
    //       ...itemData,
    //       count: 1,
    //     });
    //   }
    // },
    // removeItem(itemData: TMenuItem) {
    //   const listItem = this.cartItemList.find((item) => item.id === itemData.id);

    //   if (!listItem) return;

    //   if (listItem?.count === 1) {
    //     this.cartItemList = this.cartItemList.filter((cartItem) => cartItem.id !== itemData.id);
    //   } else {
    //     listItem.count -= 1;
    //   }
    // },
  },
});

export default useCartStore;
