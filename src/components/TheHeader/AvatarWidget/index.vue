<template>
  <div
  class="avatar-widget"
  :class="{
    'avatar-widget__opened': isShowMenu
  }">
    <div class="avatar-widget__content">
      <ButtonComponent
      v-if="!isShowMenu"
      @click="isShowMenu = !isShowMenu"
      class="avatar-widget__action-button">
        <div/>
      </ButtonComponent>

      <div class="avatar-widget__top-row">
        <div class="avatar-widget__menu-row">
          Мои данные
        </div>

        <span class="avatar-widget__icon material-icons">
          account_circle
        </span>
      </div>

      <div class="avatar-widget__menu-row">
        Мои заказы
      </div>

      <div class="avatar-widget__menu-row">
        Выйти
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import ButtonComponent from '@/components/Button';

  export default defineComponent({
    name: 'AvatarWidget',
    components: {
      ButtonComponent,
    },
    setup() {
      const isShowMenu = ref(false);

      return {
        isShowMenu,
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

    &:hover {
      background-color: rgba(#000, 0.08);
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
    width: 100%;
    padding: 5px 5px 5px 12px;

    background-color: #fff;
    border-radius: 14px;

    font-size: 20px;
    font-weight: 500;

    cursor: pointer;
  }
</style>