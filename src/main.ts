import { createApp } from 'vue';
import AppScreen from './screens/index.vue';
import router from './routes';
import 'material-icons/iconfont/material-icons.css';

const app = createApp(AppScreen);

app.use(router);

app.mount('#app');