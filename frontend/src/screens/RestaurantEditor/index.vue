<template>
  <div :class="$style.screen">
    <div :class="$style.content">
      <div :class="$style.header">
        <ButtonComponent
        @click="goToRestaurantList"
        :class="$style.button"
        icon="arrow_back"
        iconPosition="left"
        text="Рестораны"
        type="base"/>

        <h2 :class="$style.title">
          {{ mode === 'create' ? 'Создание нового ресторана' : 'Редактирование ресторана “Крошка картошка”' }}
        </h2>
      </div>

      <div :class="$style.form">
        <div :class="$style['form-header']">
          <TabsComponent
          v-model="activeTab"
          :tabs="tabs"/>
        </div>

        <div
        v-if="activeTab === 'info'"
        :class="$style['form-body']">
          <div :class="$style['first-column']">
            <img
            v-if="mode === 'edit'"
            @click="selectImage"
            :class="$style.image"
            :src="restImg">

            <div
            v-else
            @click="selectImage"
            :class="$style['load-image-container']">
              <IconComponent
              :class="$style['load-image-icon']"
              icon="add_a_photo"/>
            </div>

            <TextFieldComponent
            v-model="name"
            :class="$style.textfield"
            label="Название"/>

            <TextFieldComponent
            v-model="address"
            :class="$style.textfield"
            label="Адрес"/>

            <TextFieldComponent
            v-model="number"
            :class="$style.textfield"
            label="Контактный телефон"/>

            <TextFieldComponent
            v-model="email"
            :class="$style.textfield"
            label="Контактный email"/>
          </div>

          <div :class="$style['second-column']">
            <span :class="$style.label">
              Время работы
            </span>

            <div :class="$style['date-textfields']">
              <TextFieldComponent
              v-model="fromWorkTime"
              :class="$style['date-textfield']"
              label="От"/>

              <TextFieldComponent
              v-model="toWorkTime"
              :class="$style['date-textfield']"
              label="До"/>
            </div>

            <CheckboxComponent
            v-model="isPickup"
            :class="$style.checkbox"
            text="Самовывоз"/>

            <CheckboxComponent
            v-model="isDelivery"
            :class="$style.checkbox"
            text="Доставка"/>
          </div>

          <ButtonComponent text="Сохранить изменения"/>
        </div>

        <div
        v-else
        :class="$style.menu">
          <MenuItem
          v-for="menuItem in menuList"
          @edit-button-click="(value) => menuItemEditorData = value"
          :itemData="menuItem"
          :key="menuItem.id"/>

          <div :class="$style['add-memu-item-button']">
            <IconComponent
            :class="$style['add-menu-item-icon']"
            icon="add"/>
          </div>
        </div>

        <div
        v-if="mode === 'create'"
        :class="$style.footer">
          <ButtonComponent
          :class="$style.button"
          text="Отправить заявку"
          type="accent"/>
        </div>
      </div>
    </div>

    <ModalComponent
    v-if="menuItemEditorData"
    @close="menuItemEditorData = null"
    :class="$style.modal"
    :hasPadding="false">
      <MenuItemEditor :itemData="menuItemEditorData"/>
    </ModalComponent>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import ButtonComponent from '@/components/Button';
  import TextFieldComponent from '@/components/TextField';
  import CheckboxComponent from '@/components/Checkbox';
  import TabsComponent, { TTabs } from '@/components/Tabs';
  import MenuItem from './MenuItem';
  import IconComponent from '@/components/Icon';
  import ModalComponent from '@/components/Modal';
  import MenuItemEditor from './MenuItemEditor';
  import useUpload from '@/hooks/useUpload';
  import restImg from '@/assets/rest.png';
  import potatoImg from '@/assets/potato.png';
  import { TMenuItem } from '@/types/api';

  export default defineComponent({
    name: 'RestaurantEditorScreen',
    components: {
      ButtonComponent,
      TabsComponent,
      TextFieldComponent,
      IconComponent,
      CheckboxComponent,
      MenuItem,
      ModalComponent,
      MenuItemEditor,
    },
    setup() {
      const router = useRouter();
      const route = useRoute();

      const mode = ref<'create' | 'edit'>('create');
      const activeTab = ref<'info' | 'menu'>('info');

      const name = ref('');
      const address = ref('');
      const number = ref('');
      const email = ref('');
      const fromWorkTime = ref('');
      const toWorkTime = ref('');
      const isPickup = ref(false);
      const isDelivery = ref(false);

      const menuItemEditorData = ref<TMenuItem | null>(null);

      const tabs: TTabs = [
        {
          text: 'Инфо',
          value: 'info',
        },
        {
          text: 'Меню',
          value: 'menu',
        },
      ];

      const menuList: Array<TMenuItem> = new Array(14).fill('').map((_item, index) => {
        return {
          id: `potato-${index + 1}`,
          imgSrc: potatoImg,
          name: `Картофель по-деревенски ${index + 1}`,
          price: 20 * (index + 1),
          weight: 10 * (index + 1),
        };
      });

      function goToRestaurantList() {
        router.push({
          name: 'partner-restaurant-list',
        }).catch(console.error);
      }

      async function selectImage() {
        const file = await useUpload();

        // eslint-disable-next-line no-console
        console.log(file);
      }

      if (route.params.id) {
        mode.value = 'edit';
      }

      return {
        tabs,
        activeTab,
        restImg,
        mode,
        name,
        address,
        number,
        email,
        fromWorkTime,
        toWorkTime,
        isPickup,
        isDelivery,
        menuList,
        menuItemEditorData,

        goToRestaurantList,
        selectImage,
      };
    },
  });
</script>

<style module lang="scss">
  .screen {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;

    padding: 116px 120px 52px;

    background-color: white;

    @media screen and (width <= 1400px) {
      padding-right: 60px;
      padding-left: 60px;
    }
    @media screen and (width <= 1023px) {
      padding-right: 40px;
      padding-bottom: 32px;
      padding-left: 40px;
    }
    @media screen and (width <= 575px) {
      padding: 80px 14px 14px;
    }
  }

  .content {
    width: 100%;
    max-width: 1480px;
  }

  .header {
    flex-direction: column;

    margin-bottom: 12px;
    overflow: hidden;
  }

  .button {
    width: max-content;
  }

  .title {
    width: 100%;

    font-size: 32px;
    font-weight: 700;
  }

  .form {
    width: 100%;
    overflow: hidden;

    border-radius: 14px;
    box-shadow: 0 4px 8px rgb(0 0 0 / 0.4);
  }

  .form-header {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 78px;

    background-color: #f9f9f9;
    border-bottom: 2px solid #dadada;
  }

  .form-body {
    display: grid;
    grid-template-columns: minmax(200px, 444px) 200px;
    gap: 20px 40px;

    padding: 20px 20px 40px;

    @media screen and (width <= 767px) {
      grid-template-columns: 1fr;

      padding: 20px 14px;
    }
  }

  .first-column {
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 100%;

    @media screen and (width <= 767px) {
      width: 100%;
    }
  }

  .second-column {
    display: flex;
    flex-direction: column;
  }

  .image {
    width: 100%;
    height: 248px;

    border-radius: 10px;

    cursor: pointer;
    object-fit: cover;

    transition: filter 0.05s linear;

    &:hover {
      filter: brightness(80%);
    }
  }

  .load-image-container {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 248px;

    border: 2px solid #818181;
    border-radius: 14px;

    cursor: pointer;

    &:hover {
      background-color: rgb(0 0 0 / 0.1);
    }
  }

  .load-image-icon {
    width: 140px;
    height: 140px;

    font-size: 140px !important;
  }

  .textfield {
    width: 100%;
  }

  .footer {
    display: flex;
    justify-content: flex-end;

    padding: 14px 28px;

    background-color: #f9f9f9;
    border-top: 2px solid #dadada;

    @media screen and (width <= 767px) {
      padding: 14px;
    }
  }

  .label {
    display: block;

    margin-bottom: 10px;

    font-size: 20px;
    line-height: 24px;
  }

  .date-textfields {
    display: flex;
    gap: 14px;

    margin-bottom: 24px;
  }

  .date-textfield {
    width: 124px;
  }

  .checkbox {
    margin-bottom: 20px;
  }

  .menu {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 14px;

    padding: 20px 20px 40px;

    @media screen and (width <= 1400px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (width <= 767px) {
      grid-template-columns: 1fr;

      padding: 20px 14px;
    }
  }

  .add-memu-item-button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 124px;

    border-radius: 14px;
    box-shadow: 0 0 8px rgb(0 0 0 / 0.4);

    cursor: pointer;

    transition: background-color 0.1s linear;

    &:hover {
      background-color: rgb(0 0 0 / 0.1);
    }
  }

  .add-menu-item-icon {
    width: 50px;
    height: 50px;

    font-size: 50px !important;
  }
</style>