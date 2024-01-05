import { createApp } from 'vue';
import AppScreen from './screens/index.vue';
import router from './routes';
import store from '@/store';
import 'material-icons/iconfont/material-icons.css';
import { register as swiperRegister } from 'swiper/element/bundle';

import clickOutside from './directives/clickOutside';

swiperRegister();

const app = createApp(AppScreen);

app.use(router);
app.use(store);

app.directive('click-outside', clickOutside);

app.mount('#app');