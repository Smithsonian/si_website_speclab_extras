import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModalsStore = defineStore('modals', () => {
  const showKeats = ref(false);
  const showPigments = ref(false);
  const showJades = ref(false);
  const showLopezMorales = ref(false);

  return { showKeats, showPigments, showJades, showLopezMorales };
});
