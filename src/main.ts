import './assets/speclab_extras_theme.scss';
import 'video.js/dist/video-js.css';
// import 'ableplayer/build/ableplayer.min.css';
import '@smithsonian/ableplayer-module-test/build/ableplayer.min.css';
import App from './App.vue';
import { ViteSSG } from 'vite-ssg/single-page';
import { createPinia } from 'pinia';
import { useModalsStore } from './store/modals';

export const createApp = ViteSSG(App, ({ app }) => {
  const pinia = createPinia();
  app.use(pinia);
  const modalStore = useModalsStore(pinia);
  modalStore.initialize();
});
