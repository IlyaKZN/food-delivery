<template>
  <div class="login-screen">
    <TextFieldComponent
    v-model="test"
    placeholder="Номер телефона"/>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import TextFieldComponent from '@/components/TextField';

  export default defineComponent({
    name: 'LoginScreen',
    components: {
      TextFieldComponent,
    },
    setup() {
      const test = ref('');

      return {
        test,
      };
    },
  });
</script>

<style lang="scss">
  .login-screen {
    padding: 100px;
  }
</style>