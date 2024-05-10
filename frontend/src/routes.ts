import { createRouter, createWebHistory } from 'vue-router';
import MainScreen from './screens/Main';
import LoginScreen from './screens/Login';
import RestorauntScreen from './screens/Restourant';
import PartnerRestaurantListScreen from './screens/PartnerRestaurantList';
import RestaurantEditorScreen from './screens/RestaurantEditor';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'main',
      path: '',
      component: MainScreen,
    },
    {
      name: 'login',
      path: '/login',
      component: LoginScreen,
    },
    {
      name: 'restoraunt',
      path: '/restoraunt/:id',
      component: RestorauntScreen,
    },
    {
      name: 'partner-restaurant-list',
      path: '/partner-restaurant-list',
      component: PartnerRestaurantListScreen,
    },
    {
      name: 'restaurant-editor',
      path: '/restaurant-editor/:id?',
      component: RestaurantEditorScreen,
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
