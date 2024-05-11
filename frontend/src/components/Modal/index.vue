<template>
  <Transition
  appear
  name="modal-wrapper">
    <div
    v-if="isOpen"
    @click.self="close"
    @wheel.stop
    class="modal-container">
      <Transition
      appear
      mode="out-in"
      name="modal-content">
        <div
        v-if="isOpen"
        class="modal-content">
          <slot/>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script lang="ts">
  import { defineComponent, ref, onBeforeUnmount } from 'vue';

  export default defineComponent({
    name: 'ModalComponent',
    emits: ['close'],
    setup(_props, { emit }) {
      const body = document.querySelector('body');

      const isOpen = ref(true);

      function close() {
        isOpen.value = false;

        setTimeout(() => {
          emit('close');
        }, 250);
      }

      body!.style.overflow = 'hidden';

      onBeforeUnmount(() => {
        body!.style.overflow = 'auto';
      });

      return {
        isOpen,

        close,
      };
    },
  });
</script>

<style lang="scss">
  .modal-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    background-color: rgb(0 0 0 / 0.32);
  }

  .modal-content {
    padding: 14px;

    background-color: white;
    border-radius: 14px;
  }

  .modal-wrapper-enter-active,
  .modal-wrapper-leave-active {
    transition: all 0.25s;
  }

  .modal-wrapper-enter-from,
  .modal-wrapper-leave-to {
    opacity: 0;
  }

  .modal-content-enter-active,
  .modal-content-leave-active {
    transition: all 0.25s;
  }

  .modal-content-enter-from,
  .modal-content-leave-to {
    opacity: 0;

    transform: scale(0.6);
  }
</style>