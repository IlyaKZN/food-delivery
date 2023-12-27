import { createRouter, createWebHistory } from 'vue-router';
import MainScreen from '@/screens/Main/index.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'main',
      path: '',
      component: MainScreen,
    },
  ],
});

export default router;
