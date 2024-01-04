<template>
  <div class="main-screen-control-panel">
    <div
    class="main-screen-control-panel__filters-container"
    ref="filtersContainer">
      <ButtonComponent
      v-for="item in viewItems"
      class="main-screen-control-panel__button"
      :text="item.text"
      type="base"
      :key="item.value"
      :ref="(el) => filterButtonRefHandler(el as ComponentPublicInstance, item)"/>

      <ButtonComponent
      v-if="hiddenFilterList.length"
      class="main-screen-control-panel__button"
      icon="expand_more"
      text="Еще"
      type="base"
      :ref="(el) => showMoreButtonRefHandler(el as ComponentPublicInstance)"/>
    </div>

    <ButtonComponent
    class="main-screen-control-panel__button main-screen-control-panel__sort-button"
    icon="sort"
    iconPosition="left"
    text="Сортировка"
    type="base"/>
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    ComponentPublicInstance,
    nextTick,
    ref,
    computed,
    onMounted,
  } from 'vue';
  import ButtonComponent from '@/components/Button';
  import { TFilterListItem } from './types';

  export default defineComponent({
    name: 'MainScreenControlPanel',
    components: {
      ButtonComponent,
    },
    setup() {
      const filtersContainer = ref<HTMLDivElement>();

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
          value: 'Бургеры',
        },
        {
          text: 'Бургеры2',
          value: 'Бургеры',
        },
        {
          text: 'Бургеры3',
          value: 'Бургеры',
        },
        {
          text: 'Бургеры4',
          value: 'Бургеры',
        },
        {
          text: 'Бургеры5',
          value: 'Бургеры',
        },
        {
          text: 'Бургеры6',
          value: 'Бургеры',
        },
        {
          text: 'Бургеры7',
          value: 'Бургеры',
        },
        {
          text: 'Бургеры8',
          value: 'Бургеры',
        },
        {
          text: 'Бургеры9',
          value: 'Бургеры',
        },
        {
          text: 'Бургеры10',
          value: 'Бургеры',
        },
      ];

      const hiddenFilterList = ref<Array<TFilterListItem>>([]);

      const viewItems = computed(() => {
        return filterList.filter((item) => !hiddenFilterList.value.includes(item));
      });

      async function filterButtonRefHandler(el: ComponentPublicInstance, item: TFilterListItem) {
        await nextTick();

        const itemClientRect = (el.$el as HTMLDivElement).getBoundingClientRect();

        if (itemClientRect.left + itemClientRect.width > filtersContainerRightSideCoord!) {
          hiddenFilterList.value.push(item);
        }
      }

      function showMoreButtonRefHandler(el: ComponentPublicInstance) {
        const showMoreButtonClentRect = (el.$el as HTMLDivElement).getBoundingClientRect();

        if (showMoreButtonClentRect.left + showMoreButtonClentRect.width > filtersContainerRightSideCoord!) {
          hiddenFilterList.value.push(viewItems.value.at(-1)!);
        }
      }

      onMounted(() => {
        const filtersContainerClientRect = filtersContainer.value!.getBoundingClientRect();

        filtersContainerRightSideCoord = filtersContainerClientRect.left + filtersContainerClientRect.width;
      });

      return {
        filterList,
        filtersContainer,
        viewItems,
        hiddenFilterList,
        showMoreButtonRefHandler,
        filterButtonRefHandler,
      };
    },
  });
</script>

<style lang="scss">
  @use '@/styles/variables' as *;

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

  .main-screen-control-panel__sort-button {
    width: max-content;
    margin-left: 110px;
  }
</style>