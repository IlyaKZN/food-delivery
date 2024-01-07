<template>
  <div class="login-screen">
    <form class="login-screen__form">
      <div class="login-screen__form-header">
        <ButtonComponent
        @click.prevent="goBackButtonHandler"
        class="login-screen__form-back-button"
        icon="arrow_back"/>

        <div class="login-screen__logo-container">
          <span class="login-screen__logo-text">LOGO</span>
        </div>
      </div>

      <h3 class="login-screen__title">
        Вход
      </h3>

      <TextFieldComponent
      class="login-screen__input"
      placeholder="Номер телефона"/>

      <span class="login-screen__forgot-password">
        Забыли пароль?
      </span>

      <div class="login-screen__footer">
        <ButtonComponent
        class="login-screen__footer-button login-screen__footer-button--registration"
        text="Зарегистрироваться"
        type="base"/>

        <ButtonComponent
        class="login-screen__footer-button"
        text="Войти"/>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import ButtonComponent from '@/components/Button';
  import TextFieldComponent from '@/components/TextField';

  export default defineComponent({
    name: 'LoginScreen',
    components: {
      TextFieldComponent,
      ButtonComponent,
    },
    setup() {
      const test = ref('');

      const router = useRouter();

      function goBackButtonHandler() {
        if (window.history.state.back) {
          router.go(-1);
        } else {
          router.push({ name: 'main' });
        }
      }

      return {
        test,
        goBackButtonHandler,
      };
    },
  });
</script>

<style lang="scss">
  @use '@/styles/variables.scss' as *;

  .login-screen {
    flex-grow: 1;

    background-color: #efefef;
  }

  .login-screen__form {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 476px;
    height: 375px;
    padding: 16px;
    margin: 168px auto 0;

    background-color: white;
    filter: drop-shadow(0 0 8px rgb(0 0 0 / 0.25));
    border-radius: 14px;
  }

  .login-screen__form-header {
    display: flex;
    justify-content: space-between;

    width: 100%;
    margin-bottom: 42px;
  }

  .login-screen__form-back-button {
    width: max-content;

    background-color: transparent;
    border-radius: 50%;
  }

  .login-screen__logo-container {
    display: flex;
    align-items: center;

    width: max-content;
    height: 50px;
    padding: 0 13px;

    background-color: $color-app-primary;
    border-radius: 14px;
  }

  .login-screen__logo-text {
    font-size: 32px;
    font-weight: 700;
  }

  .login-screen__title {
    margin-bottom: 28px;

    font-size: 24px;
    line-height: 28px;
  }

  .login-screen__input {
    width: 100%;
    margin-bottom: 6px;
  }

  .login-screen__forgot-password {
    align-self: flex-start;

    margin-left: 16px;

    font-size: 16px;
    color: $color-text-secondary;
    text-decoration: underline;

    cursor: pointer;

    &:hover {
      color: #405ba1;
    }
  }

  .login-screen__footer {
    display: flex;
    justify-content: space-between;

    width: 100%;
    margin-top: auto;
  }

  .login-screen__footer-button {
    width: max-content;
    padding: 0 16px;
  }

  .login-screen__footer-button--registration {
    color: $color-text-secondary;
  }
</style>