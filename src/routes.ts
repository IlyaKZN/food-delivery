import { createRouter, createWebHistory } from 'vue-router';
import MainScreen from '@/screens/Main/index.vue';
import LoginScreen from '@/screens/Login/index.vue';

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
  ],
});

export default router;
