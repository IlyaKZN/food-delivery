import { createRouter, createWebHistory } from 'vue-router';
import MainScreen from './screens/Main';
import LoginScreen from './screens/Login';
import RestorauntScreen from './screens/Restourant';

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
  ],
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
