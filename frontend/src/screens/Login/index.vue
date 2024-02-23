<template>
  <div class="login-screen">
    <form
    @submit="submitForm"
    class="login-screen__form">
      <div class="login-screen__form-header">
        <ButtonComponent
        @click.prevent="goBackButtonHandler"
        class="login-screen__form-back-button"
        icon="arrow_back"/>

        <div class="login-screen__logo-container">
          <span class="login-screen__logo-text">LOGO</span>
        </div>
      </div>

      <h3
      v-if="isLogin"
      class="login-screen__title">
        Вход
      </h3>
      <h3
      v-if="isRegister"
      class="login-screen__title">
        Вход
      </h3>
      <h3
      v-if="isForget"
      class="login-screen__title">
        Забыли пароль?
      </h3>

      <TextFieldComponent
      v-model="loginValue"
      class="login-screen__input"
      placeholder="Номер телефона"
      type="phoneNumber"/>

      <TextFieldComponent
      v-if="isLogin || isRegister"
      v-model="passwordValue"
      class="login-screen__input login-screen__input--password"
      placeholder="Пароль"
      type="password"/>

      <span
      v-if="isLogin"
      @click="switchScreen('forget')"
      class="login-screen__forgot-password">
        Забыли пароль?
      </span>

      <div class="login-screen__footer">
        <ButtonComponent
        v-if="isLogin"
        @click="switchScreen('register')"
        class="login-screen__footer-button login-screen__footer-button--registration"
        text="Зарегистрироваться"
        type="base"/>

        <ButtonComponent
        @click="isLogin ? switchScreen('login') : isForget ? switchScreen('forget') : switchScreen('register')"
        class="login-screen__footer-button"
        :text="isLogin ? 'Войти' : isForget ? 'Восстановить' : 'Зарегистрироваться'"/>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import ButtonComponent from '@/components/Button';
  import TextFieldComponent from '@/components/TextField';
  import useProfileStore from '@/store/profile';
  import { BACKEND_URL as BASE_URL } from '@/config';

  export default defineComponent({
    name: 'LoginScreen',
    components: {
      TextFieldComponent,
      ButtonComponent,
    },
    setup() {
      const screenState = ref('login');
      const profileStore = useProfileStore();

      const loginValue = ref('');
      const passwordValue = ref('');

      const router = useRouter();

      function goBackButtonHandler() {
        if (window.history.state.back) {
          router.go(-1);
        } else {
          router.push({ name: 'main' });
        }
      }

      function submitForm(e: any) {
        e.preventDefault();
        if (screenState.value === 'login') {
          login();
        }
        if (screenState.value === 'register') {
          register();
        }
        if (screenState.value === 'forget') {
          forget();
        }
      }

      function switchOrActionScreen(screen: string) {
        if (screenState.value === screen) {
          if (screen === 'login') {
            login();
          }
          if (screen === 'register') {
            register();
          }
          if (screen === 'forget') {
            forget();
          }

          return;
        }
        screenState.value = screen;
      }

      const makeJsonRequest = async (url: string, method: string, body: any) => {
        try {
          const response = await fetch(url, {
            method,
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          });
          const json = await response.json();
          if (!response.ok) {
            throw new Error(json.message);
          }
          return json;
        } catch (error) {
          console.error('Error:', error);
          // alert(error.message)
          throw error;
        }
      };

      // like login
      function forget() {
        makeJsonRequest(`${BASE_URL}/forget-password`, 'POST', {
          phone_number: loginValue.value,
        })
          .then((data) => {
            profileStore.setToken(data.token);
            router.push({ name: 'main' });
          })
          .catch((error) => {
            alert(error);
          });
      }

      // like login
      function register() {
        makeJsonRequest(`${BASE_URL}/register`, 'POST', {
          phone_number: loginValue.value,
          password: passwordValue.value,
        })
          .then((data) => {
            profileStore.setToken(data.token);
            router.push({ name: 'main' });
          })
          .catch((error) => {
            alert(error);
          });

      }

      function login() {
        makeJsonRequest(`${BASE_URL}/login`, 'POST', {
          phone_number: loginValue.value,
          password: passwordValue.value,
        })
          .then((data) => {
            profileStore.setToken(data.token);
            router.push({ name: 'main' });
          })
          .catch((error) => {
            alert(error);
          });
      }

      const isLogin = computed(() => screenState.value === 'login');
      const isRegister = computed(() => screenState.value === 'register');
      const isForget = computed(() => screenState.value === 'forget');

      return {
        submitForm,
        switchScreen: switchOrActionScreen,
        isLogin,
        isRegister,
        isForget,
        loginValue,
        passwordValue,
        login,
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
    padding: 16px;
    margin: 120px auto 0;

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
    margin-bottom: 28px;
  }

  .login-screen__input--password {
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
    margin-top: 76px;
  }

  .login-screen__footer-button {
    width: max-content;
    padding: 0 16px;
  }

  .login-screen__footer-button--registration {
    color: $color-text-secondary;
  }
</style>