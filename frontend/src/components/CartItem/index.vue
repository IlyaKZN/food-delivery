<template>
  <div
  @scroll.stop
  @wheel.stop
  class="cart-item-component">
    <img
    alt="Изображение блюда"
    class="cart-item-component__image"
    :src="itemData.imgSrc">

    <div class="cart-item-component__info-block">
      <div class="cart-item-component__info-block-row">
        <span class="cart-item-component__name">
          {{ itemData.name }}
        </span>

        <IconComponent
        @click="$emit('delete-button-click', itemData.emitData)"
        clickable
        icon="close"/>
      </div>

      <div class="cart-item-component__info-block-row cart-item-component__info-block-row--bottom">
        <div class="cart-item-component__count-manager">
          <IconComponent
          @click="$emit('decr-button-click', itemData.emitData)"
          clickable
          icon="remove"/>

          <span class="cart-item-component__count">
            {{ itemData.count }}
          </span>

          <IconComponent
          @click="$emit('inc-button-click', itemData.emitData)"
          clickable
          icon="add"/>
        </div>

        <span class="cart-item-component__price">
          {{ `${itemData.price} ₽` }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import IconComponent from '../Icon';
  import { TCartItem } from './types';

  export default defineComponent({
    name: 'CartItemComponent',
    components: {
      IconComponent,
    },
    props: {
      itemData: {
        type: Object as PropType<TCartItem>,
        required: true,
      },
    },
    emits: ['delete-button-click', 'inc-button-click', 'decr-button-click'],
    setup() {
    },
  });
</script>

<style lang="scss">
  .cart-item-component {
    display: flex;

    width: 100%;
    height: 80px;
  }

  .cart-item-component__image {
    width: 80px;
    height: 80px;
    margin-right: 10px;

    border-radius: 10px;
  }

  .cart-item-component__info-block {
    display: flex;
    flex-direction: column;
    gap: 8px;

    width: 100%;
    padding-top: 4px;
  }

  .cart-item-component__info-block-row {
    display: flex;
    justify-content: space-between;

    overflow: hidden;
  }

  .cart-item-component__info-block-row--bottom {
    margin-top: auto;
    margin-bottom: 4px;
  }

  .cart-item-component__name {
    display: -webkit-box;

    overflow: hidden;

    font-size: 16px;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-clamp: 2;
  }

  .cart-item-component__delete-button {
    width: 30px;
    height: 30px;
    padding: 0;

    background-color: transparent;
    border-radius: 50%;

    .button-component__icon {
      font-size: 24px !important;
    }
  }

  .cart-item-component__count-manager {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 82px;
    height: 26px;

    background-color: #d9d9d9;
    border-radius: 10px;
  }

  .cart-item-component__count {
    font-size: 16px;
  }

  .cart-item-component__price {
    font-size: 20px;
  }
</style>