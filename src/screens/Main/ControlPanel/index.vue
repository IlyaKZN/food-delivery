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

      <DropDownComponent>
        <template #default="{ clickHandler }">
          <ButtonComponent
          v-if="hiddenFilterList.length"
          @click.stop="clickHandler"
          class="main-screen-control-panel__button"
          :class="{
            'main-screen-control-panel__button--active': isSelectedHiddenFilterItem,
          }"
          icon="expand_more"
          :text="showMoreButtonText"
          type="base"
          :ref="(el) => showMoreButtonRefHandler(el as ComponentPublicInstance)"/>
        </template>

        <template #overlay>
          <div class="main-screen-control-panel__more-popup">
            <div class="main-screen-control-panel__more-popup-content">
              <ButtonComponent
              v-for="item in sortedHiddenFilterList"
              @click="filterButtonClickHandler(item)"
              class="main-screen-control-panel__hidden-filter-button"
              :text="item.text"
              :key="item.value"/>
            </div>
          </div>
        </template>
      </DropDownComponent>
    </div>

    <div class="main-screen-control-panel__options-container">
      <DropDownComponent>
        <template #default="{ clickHandler }">
          <ButtonComponent
          @click.stop="clickHandler"
          class="main-screen-control-panel__button main-screen-control-panel__sort-button"
          icon="expand_more"
          iconPosition="left"
          :text="obtainingMethod"
          type="base"/>
        </template>

        <template #overlay>
          <div class="main-screen-control-panel__more-popup-2">
            <div class="main-screen-control-panel__more-popup-content">
              <ButtonComponent
              @click="obtainingMethod = 'Доставка'"
              class="main-screen-control-panel__hidden-filter-button"
              text="Доставка"/>

              <ButtonComponent
              @click="obtainingMethod = 'Самовывоз'"
              class="main-screen-control-panel__hidden-filter-button"
              text="Самовывоз"/>
            </div>
          </div>
        </template>
      </DropDownComponent>

      <ButtonComponent
      class="main-screen-control-panel__button main-screen-control-panel__sort-button"
      icon="sort"
      iconPosition="left"
      text="Сортировка"
      type="base"/>
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
  } from 'vue';
  import { storeToRefs } from 'pinia';
  import ButtonComponent from '@/components/Button';
  import { TFilterListItem } from './types';
  import useClientStore from '@/store/client';
  import DropDownComponent from '@/components/DropDown';
  import { debounce } from 'lodash';

  export default defineComponent({
    name: 'MainScreenControlPanel',
    components: {
      ButtonComponent,
      DropDownComponent,
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
      const obtainingMethod = ref('Доставка');

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

      async function calcOverflowShowMoreButton(showMoreButtonEl: HTMLDivElement) {
        await nextTick();

        if (!showMoreButtonEl) return;

        const showMoreButtonClientRect = showMoreButtonEl.getBoundingClientRect();

        const space = isSelectedHiddenFilterItem.value ? 10 : 80;

        if (showMoreButtonClientRect.left + showMoreButtonClientRect.width + space > filtersContainerRightSideCoord!) {
          hiddenFilterList.value.push(viewItems.value.at(-1)!);

          calcOverflowShowMoreButton(showMoreButtonEl);
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

        calcOverflowShowMoreButton(showMoreButton.value!.$el);
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

      function closeShowMorePopup() {
        isShowMorePopup.value = false;
      }

      function filterButtonClickHandler(item: TFilterListItem) {
        filterValue.value = item.value;
      }

      watch(() => windowData.value?.width, () => {
        const filtersContainerClientRect = filtersContainer.value!.getBoundingClientRect();

        filtersContainerRightSideCoord = filtersContainerClientRect.left + filtersContainerClientRect.width;

        hiddenFilterList.value = [];
        debouncedCalcOverflowItems();
      });

      watch(filtersContainer, () => {
        const filtersContainerClientRect = filtersContainer.value!.getBoundingClientRect();

        filtersContainerRightSideCoord = filtersContainerClientRect.left + filtersContainerClientRect.width;
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
        obtainingMethod,
        showMoreButtonRefHandler,
        filterButtonRefHandler,
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
    height: 64px;
    padding: 10px 30px;
    overflow: hidden;

    background-color: $color-app-primary;
    border-radius: 43px;
  }

  .main-screen-control-panel__button {
    width: auto;
    min-width: min-content;
    height: 100%;
    padding: 0 10px;
  }

  .main-screen-control-panel__filters-container {
    display: flex;
    flex-grow: 1;
    gap: 8px;

    height: 100%;
    overflow: hidden;
  }

  .main-screen-control-panel__options-container {
    display: flex;
    gap: 8px;
  }

  .main-screen-control-panel__button--active {
    background-color: white;
  }

  .main-screen-control-panel__sort-button {
    width: max-content;
    max-width: max-content;
  }

  .main-screen-control-panel__hidden-filter-button {
    justify-content: flex-start;

    min-height: 50px;
    padding-left: 20px;

    background-color: white;
  }

  .main-screen-control-panel__more-popup {
    width: 264px;
    height: 214px;
    overflow: hidden;
    overscroll-behavior: contain;

    background-color: white;
  }

  .main-screen-control-panel__more-popup-2 {
    width: 264px;
    height: 148px;
    overflow: hidden;
    overscroll-behavior: contain;

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