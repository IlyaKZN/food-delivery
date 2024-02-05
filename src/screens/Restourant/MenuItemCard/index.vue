<template>
  <div class="menu-item-card">
    <img
    alt="Изображение блюда"
    class="menu-item-card__image"
    :src="itemData.imgSrc">

    <h4 class="menu-item-card__name">
      {{ itemData.name }}
    </h4>

    <div class="menu-item__info-container">
      <span class="menu-item__price">
        {{ itemData.price }}₽
      </span>

      <span class="menu-item__weight">
        {{ itemData.weight }}г
      </span>
    </div>

    <ButtonComponent
    @click="$emit('add-button-click', itemData)"
    type="secondary">
      <span class="material-icons">
        add
      </span>

      <span>Добавить</span>
    </ButtonComponent>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { TMenuItem } from '@/types/api';
  import ButtonComponent from '@/components/Button';

  export default defineComponent({
    name: 'MenuItemCard',
    components: {
      ButtonComponent,
    },
    props: {
      itemData: {
        type: Object as PropType<TMenuItem>,
        required: true,
      },
    },
    emits: ['add-button-click'],
  });
</script>

<style lang="scss">
  .menu-item-card {
    display: flex;
    flex-direction: column;

    width: 260px;
    padding: 12px;

    border-radius: 14px;
    box-shadow: 0 0 8px rgb(0 0 0 / 0.4);
  }

  .menu-item-card__image {
    width: 236px;
    height: 236px;
    margin-bottom: 12px;

    border-radius: 16px;
  }

  .menu-item-card__name {
    width: 100%;
    margin-bottom: 10px;

    font-size: 20px;
  }

  .menu-item__info-container {
    display: flex;
    gap: 16px;

    margin-bottom: 10px;
  }

  .menu-item__price {
    font-size: 20px;
    font-weight: 500;
  }

  .menu-item__weight {
    font-size: 20px;
    color: #8c8c8c;
  }
</style>