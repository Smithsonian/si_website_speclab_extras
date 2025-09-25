import App from './App.vue';
import { ViteSSG } from 'vite-ssg/single-page';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

export const createApp = ViteSSG(App);
