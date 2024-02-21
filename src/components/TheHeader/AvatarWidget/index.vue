<template>
  <div
  v-click-outside="{
    handler: avatarWidgetClickOutsideHandler
  }"
  class="avatar-widget"
  :class="{
    'avatar-widget__opened': isShowMenu
  }">
    <div class="avatar-widget__content">
      <ButtonComponent
      @click="() => { if (!isShowMenu) isShowMenu = true }"
      class="avatar-widget__action-button"
      :class="{
        'avatar-widget__action-button--disabled': isShowMenu,
      }">
        <div/>
      </ButtonComponent>

      <div class="avatar-widget__top-row">
        <ButtonComponent class="avatar-widget__button">
          <div class="avatar-widget__menu-row">
            <span>Мои данные</span>
          </div>
        </ButtonComponent>

        <span class="avatar-widget__icon material-icons">
          account_circle
        </span>
      </div>

      <ButtonComponent class="avatar-widget__button">
        <div class="avatar-widget__menu-row">
          <span>Мои заказы</span>

          <span class="avatar-widget__menu-row-icon avatar-widget__menu-row-icon--history material-icons">history</span>
        </div>
      </ButtonComponent>

      <ButtonComponent class="avatar-widget__button" @click="logout">
        <div class="avatar-widget__menu-row">
          <span>Выйти</span>

          <span class="avatar-widget__menu-row-icon material-icons">logout</span>
        </div>
      </ButtonComponent>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import ButtonComponent from '@/components/Button';
  import  useProfileStore  from '@/store/profile';

  export default defineComponent({
    name: 'AvatarWidget',
    components: {
      ButtonComponent,
    },
    setup() {
      const profile = useProfileStore()
      const isShowMenu = ref(false);

      function avatarWidgetClickOutsideHandler() {
        isShowMenu.value = false;
      }

      function logout() {
        profile.setToken('');
      }

      return {
        logout,
        isShowMenu,
        avatarWidgetClickOutsideHandler,
      };
    },
  });
</script>

<style lang="scss">
  @use '@/styles/variables' as *;

  .avatar-widget {
    position: relative;

    width: 50px;
    height: 50px;
    overflow: hidden;

    background-color: $color-app-primary;
    border-radius: 14px;

    transition: all 0.1s ease;
  }

  .avatar-widget__opened {
    width: 250px;
    height: 138px;

    box-shadow: 2px 2px 2px rgb(0 0 0 / 0.25);
  }

  .avatar-widget__content {
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;

    width: 250px;
    height: 138px;
    padding: 10px 8px;
  }

  .avatar-widget__action-button {
    position: absolute;
    top: 0;
    right: 0;

    width: 50px;
    height: 50px;
    padding: 0;

    background-color: transparent;
    border-radius: 14px;

    cursor: pointer;

    // &:hover {
    //   background-color: rgba(#000, 0.08);
    // }
  }

  .avatar-widget__action-button--disabled {
    cursor: auto;

    &::after {
      display: none;
    }
  }

  .avatar-widget__icon {
    font-size: 34px !important;
  }

  .avatar-widget__top-row {
    display: flex;
    gap: 16px;

    width: 100%;
  }

  .avatar-widget__menu-row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 5px 5px 5px 12px;

    background-color: #fff;
    border-radius: 14px;

    font-size: 20px;
    font-weight: 500;

    cursor: pointer;
  }

  .avatar-widget__menu-row-icon {
    font-size: 24px;
  }

  .avatar-widget__menu-row-icon--history {
    margin-right: 2px;
  }

  .avatar-widget__button {
    height: 100%;
  }
</style>