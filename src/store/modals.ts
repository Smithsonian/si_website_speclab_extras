import { getKey, removeKey, setKey } from '@/utils/storageUtils';
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

const MODAL_KEY = 'currently-open-modal';

export const useModalsStore = defineStore('modals', () => {
  const showKeats = ref(false);
  const showPigments = ref(false);
  const showJades = ref(false);
  const showLopezMorales = ref(false);

  const initialize = () => {
    if (import.meta.env.SSR) {
      return;
    }
    const currentlyOpenModal = getKey(MODAL_KEY);
    switch (currentlyOpenModal) {
      case 'keats':
        showKeats.value = true;
        break;
      case 'pigments':
        showPigments.value = true;
        break;
      case 'jades':
        showJades.value = true;
        break;
      case 'lopezMorales':
        showLopezMorales.value = true;
        break;
      default:
      // Do nothing; no modal to open
    }
  };

  if (!import.meta.env.SSR) {
    // Serialize to session storage when modals open and close
    watch(
      [showKeats, showPigments, showJades, showLopezMorales],
      ([newKeats, newPigments, newJades, newLopezMorales]) => {
        if (newKeats) {
          setKey(MODAL_KEY, 'keats');
        } else if (newPigments) {
          setKey(MODAL_KEY, 'pigments');
        } else if (newJades) {
          setKey(MODAL_KEY, 'jades');
        } else if (newLopezMorales) {
          setKey(MODAL_KEY, 'lopezMorales');
        } else {
          removeKey(MODAL_KEY);
        }
      },
    );
  }

  return {
    showKeats,
    showPigments,
    showJades,
    showLopezMorales,
    initialize,
  };
});
