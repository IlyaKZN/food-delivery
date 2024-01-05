<template>
  <div class="main-screen-control-panel">
    <div
    class="main-screen-control-panel__filters-container"
    ref="filtersContainer">
      <ButtonComponent
      v-for="item in viewItems"
      @click="filterButtonClickHandler(item)"
      class="main-screen-control-panel__button"
      :class="{
        'main-screen-control-panel__button--active': item.value === filter,
      }"
      :text="item.text"
      type="base"
      :key="item.value"
      :ref="(el) => filterButtonRefHandler(el as ComponentPublicInstance, item)"/>

      <ButtonComponent
      v-if="hiddenFilterList.length"
      @click.stop="showMoreButtonClickHandler"
      class="main-screen-control-panel__button"
      :class="{
        'main-screen-control-panel__button--active': isSelectedHiddenFilterItem,
      }"
      icon="expand_more"
      :text="showMoreButtonText"
      type="base"
      :ref="(el) => showMoreButtonRefHandler(el as ComponentPublicInstance)"/>
    </div>

    <ButtonComponent
    class="main-screen-control-panel__button main-screen-control-panel__sort-button"
    icon="sort"
    iconPosition="left"
    text="Сортировка"
    type="base"/>

    <div
    v-show="isShowMorePopup"
    class="main-screen-control-panel__more-popup"
    ref="showMorePopup">
      <div class="main-screen-control-panel__more-popup-content">
        <ButtonComponent
        v-for="item in sortedHiddenFilterList"
        @click="filterButtonClickHandler(item)"
        class="main-screen-control-panel__hidden-filter-button"
        :text="item.text"
        :key="item.value"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    ComponentPublicInstance,
    nextTick,
    ref,
    computed,
    watch,
    onMounted,
    onBeforeUnmount,
  } from 'vue';
  import { storeToRefs } from 'pinia';
  import ButtonComponent from '@/components/Button';
  import { TFilterListItem } from './types';
  import { createPopper, Instance } from '@popperjs/core';
  import useClientStore from '@/store/client';
  import { debounce } from 'lodash';

  export default defineComponent({
    name: 'MainScreenControlPanel',
    components: {
      ButtonComponent,
    },
    props: {
      filter: {
        type: String,
        required: true,
      },
      sort: {
        type: String,
        required: true,
      },
    },
    emits: ['update:filter'],
    setup(props, { emit }) {
      const clientStore = useClientStore();

      const { windowData } = storeToRefs(clientStore);

      const filtersContainer = ref<HTMLDivElement>();
      const showMoreButton = ref<ComponentPublicInstance>();
      const showMorePopup = ref<HTMLDivElement>();
      const isShowMorePopup = ref(false);

      let showMorePopupPoper: Instance | null = null;

      let filtersContainerRightSideCoord: number | null = null;

      const filterList: Array<TFilterListItem> = [
        {
          text: 'Все',
          value: 'all',
        },
        {
          text: 'Пицца',
          value: 'Пицца',
        },
        {
          text: 'Бургеры1',
          value: 'Бургеры1',
        },
        {
          text: 'Бургеры2',
          value: 'Бургеры2',
        },
        {
          text: 'Бургеры3',
          value: 'Бургеры3',
        },
        {
          text: 'Бургеры4',
          value: 'Бургеры4',
        },
        {
          text: 'Бургеры5',
          value: 'Бургеры5',
        },
        {
          text: 'Бургеры6',
          value: 'Бургеры6',
        },
        {
          text: 'Бургеры7',
          value: 'Бургеры7',
        },
        {
          text: 'Бургеры8',
          value: 'Бургеры8',
        },
        {
          text: 'Бургеры9',
          value: 'Бургеры9',
        },
        {
          text: 'Бургеры10',
          value: 'Бургеры10',
        },
      ];

      const hiddenFilterList = ref<Array<TFilterListItem>>([]);

      const sortedHiddenFilterList = computed(() => {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return hiddenFilterList.value.sort((a, b) => {
          return filterList.findIndex((item) => item.value === a.value) - filterList.findIndex((item) => item.value === b.value);
        });
      });

      const viewItems = computed(() => {
        return filterList.filter((item) => !hiddenFilterList.value.includes(item));
      });

      const filterValue = computed({
        get() {
          return props.filter;
        },
        set(value: string) {
          emit('update:filter', value);
        },
      });

      const isSelectedHiddenFilterItem = computed(() => {
        return hiddenFilterList.value.some((item) => item.value === props.filter);
      });

      const showMoreButtonText = computed(() => {
        if (isSelectedHiddenFilterItem.value) {
          return props.filter;
        }

        return 'Еще';
      });

      const filterButtonRefs: Array<{
        data: TFilterListItem,
        component: ComponentPublicInstance,
      }> = [];

      function calcOverflowShowMoreButton(el: ComponentPublicInstance) {
        if (!el) return;

        const showMoreButtonClientRect = (el.$el as HTMLDivElement).getBoundingClientRect();

        const space = isSelectedHiddenFilterItem.value ? 10 : 80;

        if (showMoreButtonClientRect.left + showMoreButtonClientRect.width + space > filtersContainerRightSideCoord!) {
          hiddenFilterList.value.push(viewItems.value.at(-1)!);
        }
      }

      function showMoreButtonRefHandler(el: ComponentPublicInstance) {
        showMoreButton.value = el;
      }

      async function calcOverflowItems() {
        await nextTick();

        filterButtonRefs.forEach((item) => {
          const itemClientRect = (item.component.$el as HTMLDivElement).getBoundingClientRect();

          if (itemClientRect.left + itemClientRect.width > filtersContainerRightSideCoord!) {
            if (!hiddenFilterList.value.some((item1) => item1.value === item.data.value)) {
              hiddenFilterList.value.push(item.data);
            }
          }
        });

        await nextTick();
        calcOverflowShowMoreButton(showMoreButton.value!);
      }

      const debouncedCalcOverflowItems = debounce(calcOverflowItems, 100, { leading: true });

      async function filterButtonRefHandler(el: ComponentPublicInstance, item: TFilterListItem) {
        if (!el) return;

        filterButtonRefs.push({
          component: el,
          data: item,
        });

        if (filterButtonRefs.length === filterList.length) {
          debouncedCalcOverflowItems();
        }
      }

      function openShowMorePopup() {
        if (!showMorePopupPoper && showMoreButton.value && showMorePopup.value) {
          showMorePopupPoper = createPopper(showMoreButton.value.$el, showMorePopup.value, {
            placement: 'bottom-end',
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 10],
                },
              },
            ],
          });
        }

        isShowMorePopup.value = true;
      }

      function closeShowMorePopup() {
        isShowMorePopup.value = false;
      }

      function showMoreButtonClickHandler() {
        if (isShowMorePopup.value) {
          closeShowMorePopup();
        } else {
          openShowMorePopup();
        }
      }

      function clickHandler(event: MouseEvent) {
        if (isShowMorePopup.value && !showMorePopup.value?.contains(event.target as HTMLElement)) {
          closeShowMorePopup();
        }
      }

      function filterButtonClickHandler(item: TFilterListItem) {
        filterValue.value = item.value;
      }

      watch(windowData, () => {
        const filtersContainerClientRect = filtersContainer.value!.getBoundingClientRect();

        filtersContainerRightSideCoord = filtersContainerClientRect.left + filtersContainerClientRect.width;

        hiddenFilterList.value = [];
        debouncedCalcOverflowItems();
      }, { deep: true });

      watch(filtersContainer, () => {
        const filtersContainerClientRect = filtersContainer.value!.getBoundingClientRect();

        filtersContainerRightSideCoord = filtersContainerClientRect.left + filtersContainerClientRect.width;
      });

      onMounted(() => {
        window.addEventListener('click', clickHandler);
      });

      onBeforeUnmount(() => {
        window.removeEventListener('click', clickHandler);
      });

      return {
        showMorePopup,
        filterList,
        filtersContainer,
        viewItems,
        hiddenFilterList,
        isShowMorePopup,
        showMoreButtonText,
        isSelectedHiddenFilterItem,
        sortedHiddenFilterList,
        showMoreButtonRefHandler,
        filterButtonRefHandler,
        showMoreButtonClickHandler,
        closeShowMorePopup,
        filterButtonClickHandler,
      };
    },
  });
</script>

<style lang="scss">
  @use '@/styles/variables' as *;
  @use '@/styles/placeholders/index' as *;

  .main-screen-control-panel {
    display: flex;

    width: 100%;
    height: 86px;
    padding: 18px 51px;
    overflow: hidden;

    background-color: $color-app-primary;
    border-radius: 43px;
  }

  .main-screen-control-panel__button {
    width: auto;
    min-width: min-content;
    padding: 0 20px;
  }

  .main-screen-control-panel__filters-container {
    display: flex;
    flex-grow: 1;
    gap: 20px;

    height: 100%;
    overflow: hidden;
  }

  .main-screen-control-panel__button--active {
    background-color: white;
  }

  .main-screen-control-panel__sort-button {
    width: max-content;

    // margin-left: 40px;

    // margin-left: minmax(20px, 90px);
  }

  .main-screen-control-panel__more-popup {
    z-index: 10;

    width: 264px;
    height: 214px;
    overflow: hidden;
    overscroll-behavior: contain;

    background-color: white;
    filter: drop-shadow(0 0 8px rgb(0 0 0 / 0.25));
    border-radius: 14px;
  }

  .main-screen-control-panel__hidden-filter-button {
    justify-content: flex-start;

    min-height: 50px;
    padding-left: 20px;

    background-color: white;
  }

  .main-screen-control-panel__more-popup-content {
    @extend %scrollbar;

    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 100%;
    height: 100%;
    padding: 16px 18px;
    overflow: auto;
  }
</style>