<template>
  <div class="drop-down-component">
    <div
    class="drop-down-component__action-button"
    ref="actionButton">
      <slot
      :clickHandler="actionButtonclickHandler"
      name="default"/>
    </div>

    <div
    v-show="isShowPopup"
    @click="closePopup"
    class="drop-down-component-popup"
    ref="popup">
      <slot name="overlay"/>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
  import { createPopper, Instance } from '@popperjs/core';

  export default defineComponent({
    name: 'DropDownComponent',
    setup() {
      const popup = ref<HTMLDivElement>();
      const actionButton = ref();

      const isShowPopup = ref(false);

      let popper: Instance | null = null;

      function openPopup() {
        if (actionButton.value && popup.value) {
          popper = createPopper(actionButton.value, popup.value, {
            placement: 'bottom-end',
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 6],
                },
              },
            ],
          });
        }

        isShowPopup.value = true;
      }

      function closePopup() {
        isShowPopup.value = false;

        popper?.destroy();
      }

      function actionButtonclickHandler() {
        if (isShowPopup.value) {
          closePopup();
        } else {
          openPopup();
        }
      }

      function clickHandler(event: MouseEvent) {
        if (isShowPopup.value && !popup.value?.contains(event.target as HTMLElement)) {
          closePopup();
        }
      }

      onMounted(() => {
        window.addEventListener('click', clickHandler);
      });

      onBeforeUnmount(() => {
        window.removeEventListener('click', clickHandler);
      });

      return {
        openPopup,
        actionButtonclickHandler,
        closePopup,
        popup,
        actionButton,
        isShowPopup,
      };
    },
  });
</script>

<style lang="scss">
  .drop-down-component__action-button {
    position: relative;

    height: 100%;
  }

  .drop-down-component-popup {
    position: absolute;
    z-index: 1000;

    // width: min-content;
    width: 100%;
    overflow: hidden;

    filter: drop-shadow(0 0 8px rgb(0 0 0 / 0.25));
    border-radius: 14px;
  }
</style>