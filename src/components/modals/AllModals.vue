<template>
  <BModal
    title="Keats Webb: Conservation Science Imaging"
    v-model="showKeats"
    size="xl"
    lazy
    unmount-lazy
    no-footer
  >
    <KeatsModalBody />
  </BModal>
  <BModal
    title="Matthew Clarke: Identifying Pigments"
    v-model="showPigments"
    size="xl"
    lazy
    unmount-lazy
    no-footer
  >
    <PigmentsModalBody />
  </BModal>
  <BModal
    title="Matthew Clarke: Identifying Jades"
    v-model="showJades"
    size="xl"
    lazy
    unmount-lazy
    no-footer
  >
    <JadesModalBody />
  </BModal>
</template>

<script setup lang="ts">
import { useModalsStore } from '@/store/modals';
import { storeToRefs } from 'pinia';

const modalsStore = useModalsStore();
const { showKeats, showPigments, showJades } = storeToRefs(modalsStore);
</script>
