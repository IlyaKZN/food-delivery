<template>
  <div class="header-component">
    <div
    @click="logoClickHandler"
    class="header-component__logo-container">
      <span class="header-component__logo-text">LOGO</span>
    </div>

    <div
    v-if="isShowControlElements"
    class="header-component__textfield-container">
      <TextFieldComponent
      v-model="searchValue"
      class="header-component__search-textfield"
      icon="search"
      placeholder="Ресторан или блюдо"/>

      <ButtonComponent
      class="header-component__search-button"
      text="Поиск"/>
    </div>

    <div
    v-if="isShowControlElements"
    class="header-component__right-container">
      <AvatarWidget v-if="isAuthorized"/>

      <ButtonComponent
      v-else
      @click="loginButtonClickHandler"
      class="header-component__login-button"
      text="Войти"/>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useRouter } from 'vue-router';
  import ButtonComponent from '../Button';
  import TextFieldComponent from '../TextField';
  import AvatarWidget from './AvatarWidget';
  import useProfileStore from '@/store/profile';

  export default defineComponent({
    name: 'TheHeaderComponent',
    components: {
      ButtonComponent,
      AvatarWidget,
      TextFieldComponent,
    },
    setup() {
      const profileStore = useProfileStore();

      const { isAuthorized } = storeToRefs(profileStore);

      const router = useRouter();

      const searchValue = ref('');

      const isShowControlElements = computed(() => {
        if (!router.currentRoute.value.name) return false;

        return (!['login'].includes(router.currentRoute.value.name.toString()));
      });

      function loginButtonClickHandler() {
        router.push({ name: 'login' }).catch(console.error);
      }

      function logoClickHandler() {
        router.push({ name: 'main' }).catch(console.error);
      }

      return {
        searchValue,
        isAuthorized,
        isShowControlElements,
        loginButtonClickHandler,
        logoClickHandler,
      };
    },
  });
</script>

<style lang="scss">
  @use '@/styles/variables' as *;

  .header-component {
    position: relative;
    z-index: 10;

    display: flex;

    min-height: 80px;
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

    cursor: pointer;
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

    background: #fff;
  }

  .header-component__search-textfield {
    width: 360px;

    border-radius: 14px 0 0 14px;
  }

  .header-component__search-button {
    width: 130px;

    border: 2px solid #557ee5;
    border-left: 0;
    border-radius: 0 14px 14px 0;
  }

  .header-component__right-container {
    margin-left: auto;
  }

  .header-component__login-button {
    padding: 0 10px;
  }
</style>