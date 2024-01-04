<template>
  <div class="header-component">
    <div class="header-component__logo-container">
      <span class="header-component__logo-text">LOGO</span>
    </div>

    <div class="header-component__textfield-container">
      <TextFieldComponent
      v-model="searchValue"
      icon="search"
      placeholder="Ресторан или блюдо"/>

      <ButtonComponent
      class="header-component__search-button"
      text="Поиск"/>
    </div>

    <div class="header-component__right-container">
      <AvatarWidget/>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import ButtonComponent from '../Button';
  import TextFieldComponent from '../TextField';
  import AvatarWidget from './AvatarWidget';

  export default defineComponent({
    name: 'TheHeaderComponent',
    components: {
      ButtonComponent,
      AvatarWidget,
      TextFieldComponent,
    },
    setup() {
      const searchValue = ref('');

      return {
        searchValue,
      };
    },
  });
</script>

<style lang="scss">
  @use '@/styles/variables' as *;
  @use 'sass:color';

  .header-component {
    display: flex;

    height: 80px;
    padding: 15px 44px;

    box-shadow: 0 2px 2px rgb(0 0 0 / 0.25);
  }

  .header-component__logo-container {
    display: flex;
    align-items: center;

    height: 100%;
    padding: 0 13px;
    margin-right: 54px;

    background-color: $color-app-primary;
    border-radius: 14px;
  }

  .header-component__logo-text {
    font-size: 32px;
    font-weight: 700;
  }

  .header-component__textfield-container {
    display: flex;
    align-items: center;

    width: 500px;
    height: 100%;
    overflow: hidden;

    background: #fff;
    border: 2px solid #557ee5;
    border-radius: 14px;
  }

  .header-component__search-button {
    width: 130px;

    border-left: 2px solid #557ee5;
    border-radius: 0;
  }

  .header-component__right-container {
    margin-left: auto;
  }
</style>